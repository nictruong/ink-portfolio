import { Box } from 'ink';
import React, { FC } from 'react';

import Content from './components/content/content';
import Title from './components/title/title';
import Providers from './context/providers';

const App: FC<{ name?: string }> = () => (
	<Providers>
		<Box flexDirection="column" alignItems="center" justifyContent="center" width="100%">
			<Title />
			<Content />
		</Box>
	</Providers>
);

export default App;
