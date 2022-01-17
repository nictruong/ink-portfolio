import { Box } from 'ink';
import React, { ReactElement, useContext } from 'react';

import { PageContext } from '../../context/Page-provider';
import SnakeGame from '../snake-game/snake-game';

const Snake: React.FC = (): ReactElement => {
	const { setSelectedPage } = useContext(PageContext);

	const handleGameExit = () => {
		setSelectedPage('Home');
	};

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			<SnakeGame onExit={handleGameExit} />
		</Box>
	);
};

export default Snake;
