/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Text } from 'ink';
import React, { Key, ReactElement } from 'react';

import useSnakeGame, { Cell } from '../../hooks/useSnakeGame';

const HEIGHT = 10;
const WIDTH = 10;

type SnakeGameProps = {
	onExit: () => void;
};

const SnakeGame: React.FC<SnakeGameProps> = ({ onExit }): ReactElement => {
	const { cells, isEnded, score } = useSnakeGame({ onExit });

	if (isEnded) {
		return (
			<Box flexDirection="column" alignItems="center" alignSelf="center">
				<Text>GAME OVER</Text>
				<Text>Score: {score}</Text>
				<Text>Would you like to play again? [y/n]</Text>
			</Box>
		);
	}

	return (
		<Box width="100%" flexDirection="column" alignItems="center" justifyContent="center">
			{Array.from({ length: WIDTH }).map((_, i) => (
				<Box key={i as Key} justifyContent="space-between">
					{Array.from({ length: HEIGHT }).map((_, j) => (
						<GridCell key={j as Key} state={cells[i]?.[j] ?? {}} />
					))}
				</Box>
			))}
		</Box>
	);
};

export default SnakeGame;

type GridCellProps = {
	state: Cell;
};
const GridCell = ({ state: { isSnake, isFood } }: GridCellProps) => (
	<Text backgroundColor={isSnake ? 'red' : 'cyan'}>{isFood ? ' 。' : '   '}</Text>
);
