import { Box } from 'ink';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../context/language-provider';
import { MenuContext } from '../../context/menu-provider';
import { english, french, japanese, Language } from '../../utils/utils';
import About from '../about/about';
import Hints from '../hints/hints';
import LanguageSelect from '../language-select/language-select';
import Menu from '../menu/menu';
import Snake from '../snake/snake';
import Title from '../title/title';

const languageCodes: Record<Language, string> = {
	[english]: 'en',
	[french]: 'fr',
	[japanese]: 'ja',
};

const Content: React.FC = () => {
	const { selectedLanguage } = useContext(LanguageContext);
	const { selectedPage } = useContext(MenuContext);
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(languageCodes[selectedLanguage ?? english]);
	}, [i18n, selectedLanguage]);

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			{!selectedPage && <Title />}
			{!selectedLanguage && <LanguageSelect />}
			{selectedLanguage && !selectedPage && (
				<>
					<Box marginBottom={2}>
						<About />
					</Box>
					<Box>
						<Menu />
					</Box>
				</>
			)}
			{selectedLanguage && selectedPage && (
				<>
					<Snake />
				</>
			)}
			<Box marginTop={2}>
				<Hints />
			</Box>
		</Box>
	);
};

export default Content;
