import { Box } from 'ink';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../context/language-provider';
import { english, french, japanese, Language } from '../../utils/utils';
import About from '../about/about';
import Hints from '../hints/hints';
import LanguageSelect from '../language-select/language-select';

const languageCodes: Record<Language, string> = {
	[english]: 'en',
	[french]: 'fr',
	[japanese]: 'ja',
};

const Content: React.FC = () => {
	const { selectedLanguage } = useContext(LanguageContext);
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(languageCodes[selectedLanguage ?? english]);
	}, [i18n, selectedLanguage]);

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			{!selectedLanguage && <LanguageSelect />}
			{selectedLanguage && (
				<>
					<About />
				</>
			)}
			<Hints />
		</Box>
	);
};

export default Content;
