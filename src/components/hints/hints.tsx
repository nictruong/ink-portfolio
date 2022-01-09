import { Box, Text, useInput } from 'ink';
import React, { ReactElement, useContext } from 'react';

import { HintContext } from '../../context/hint-provider';

const Hints: React.FC = (): ReactElement => {
	const { showHints, toggleHints } = useContext(HintContext);

	useInput((i) => {
		const input = i.toLowerCase();
		if (input === 'h') {
			toggleHints();
		}
	});

	return (
		<>
			{showHints && (
				<Box flexDirection="column" borderStyle="round" minWidth={20}>
					<Text>hello world</Text>
				</Box>
			)}
		</>
	);
};

export default Hints;
