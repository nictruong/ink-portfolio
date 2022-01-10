import { Box } from 'ink';
import React, { ReactElement, useContext } from 'react';

import { MenuContext } from '../../context/menu-provider';
import SnakeGame from '../snake-game/snake-game';

const Snake: React.FC = (): ReactElement => {
	const { setSelectedPage } = useContext(MenuContext);

	const handleGameExit = () => {
		setSelectedPage(undefined);
	};

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			<SnakeGame onExit={handleGameExit} />
		</Box>
	);
};

export default Snake;
