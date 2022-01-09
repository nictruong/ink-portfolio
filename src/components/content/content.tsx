import { Box } from 'ink';
import React, { useContext } from 'react';

import { LanguageContext } from '../../context/language-provider';
import Hints from '../hints/hints';
import LanguageSelect from '../language-select/language-select';

const Content: React.FC = () => {
	const { selectedLanguage } = useContext(LanguageContext);

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			{!selectedLanguage && <LanguageSelect />}
			<Hints />
		</Box>
	);
};

export default Content;
