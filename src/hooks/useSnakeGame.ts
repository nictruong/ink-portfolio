import { useInput } from 'ink';
import { useMemo, useState } from 'react';

import useInterval from './useInterval';

type Coord = {
	x: number;
	y: number;
};

type SnakeSegment = {
	coord: Coord;
	isHead: boolean;
};

type Snake = SnakeSegment[];

const HEIGHT = 10;
const WIDTH = 10;

enum DIRECTION {
	TOP = 'top',
	RIGHT = 'right',
	BOTTOM = 'bottom',
	LEFT = 'left',
}

const directions: Record<DIRECTION, Coord> = {
	[DIRECTION.TOP]: { x: -1, y: 0 },
	[DIRECTION.RIGHT]: { x: 0, y: 1 },
	[DIRECTION.BOTTOM]: { x: 1, y: 0 },
	[DIRECTION.LEFT]: { x: 0, y: -1 },
};

export type Cell = {
	isSnake?: boolean;
	isFood?: boolean;
};

const moveHead = function ({ x, y }: Coord, direction: DIRECTION) {
	const newX = x + directions[direction].x;
	const newY = y + directions[direction].y;

	return {
		x: newX,
		y: newY,
	};
};

const isHeadValid = function (coord: Coord) {
	return coord.x < HEIGHT && coord.x >= 0 && coord.y < WIDTH && coord.y >= 0;
};

const generateFoodCoord = function () {
	return {
		x: Math.floor(Math.random() * HEIGHT),
		y: Math.floor(Math.random() * WIDTH),
	};
};

const isSnakeTouchingSelf = function (snake: Snake) {
	const visited = new Set();

	for (let i = 0; i < snake.length; i++) {
		const coordId = `${snake[i]?.coord.x}-${snake[i]?.coord.y}`;
		if (visited.has(coordId)) {
			return true;
		}

		visited.add(coordId);
	}

	return false;
};

const initSnake = [
	{
		coord: {
			x: Math.floor(WIDTH / 2),
			y: Math.floor(HEIGHT / 2),
		},
		isHead: true,
	},
];

type IUseSnakeGame = {
	onExit: () => void;
};

const useSnakeGame = ({ onExit }: IUseSnakeGame) => {
	const [score, setScore] = useState(0);
	const [isEnded, setIsEnded] = useState(false);
	const [foodCoord, setFoodCoord] = useState<Coord>();
	const [snake, setSnake] = useState<Snake>(initSnake);
	const [direction, setDirection] = useState<DIRECTION>();

	useInterval(() => {
		if (!direction || !snake[0]?.coord) return;

		const newHeadCoord = moveHead(snake[0].coord, direction);

		if (!isHeadValid(newHeadCoord)) {
			setIsEnded(true);
		}

		const isFoodEaten = newHeadCoord.x === foodCoord?.x && newHeadCoord.y === foodCoord.y;

		if (isFoodEaten) {
			setScore((prevScore) => prevScore + 1);
			setFoodCoord(generateFoodCoord());
		}

		const newSnake = [
			{ coord: newHeadCoord, isHead: true },
			...(isFoodEaten ? snake : snake.slice(0, -1)).map((s) => ({ ...s, isHead: false })),
		];

		if (isSnakeTouchingSelf(newSnake)) {
			setIsEnded(true);
		} else {
			setSnake(newSnake);
		}
	}, 500);

	const resetGame = () => {
		setScore(0);
		setIsEnded(false);
		setSnake(initSnake);
		setDirection(undefined);
		setFoodCoord(undefined);
	};

	useInput((i) => {
		if (!direction) {
			const newFoodCoord = generateFoodCoord();
			setFoodCoord(newFoodCoord);
		}

		if (i === '[A' && direction !== DIRECTION.BOTTOM) {
			setDirection(DIRECTION.TOP);
		} else if (i === '[C' && direction !== DIRECTION.LEFT) {
			setDirection(DIRECTION.RIGHT);
		} else if (i === '[B' && direction !== DIRECTION.TOP) {
			setDirection(DIRECTION.BOTTOM);
		} else if (i === '[D' && direction !== DIRECTION.RIGHT) {
			setDirection(DIRECTION.LEFT);
		}

		if (isEnded) {
			if (i === 'y') {
				resetGame();
			} else if (i === 'n') {
				onExit();
			}
		}
	});

	const cells: Cell[][] = useMemo(() => {
		const cells: Cell[][] = [];

		for (let i = 0; i < HEIGHT; i++) {
			cells.push([]);

			for (let j = 0; j < WIDTH; j++) {
				const isSnake = snake.some((snakeSegment) => snakeSegment.coord.x === i && snakeSegment.coord.y === j);
				const isFood = foodCoord?.x === i && foodCoord?.y === j;

				cells[i]?.push({
					isSnake,
					isFood,
				});
			}
		}

		return cells;
	}, [snake, foodCoord]);

	return {
		cells,
		isEnded,
		score,
	};
};

export default useSnakeGame;
