import { Box } from 'ink';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../context/language-provider';
import { PageContext } from '../../context/Page-provider';
import { english, french, gamePages, japanese, Language, languages, menuPages, Page } from '../../utils/utils';
import About from '../about/about';
import Hints from '../hints/hints';
import Select from '../select/select';
import Snake from '../snake/snake';
import Title from '../title/title';

const languageCodes: Record<Language, string> = {
	[english]: 'en',
	[french]: 'fr',
	[japanese]: 'ja',
};

const Content: React.FC = () => {
	const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
	const { selectedPage, setSelectedPage } = useContext(PageContext);
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(languageCodes[selectedLanguage ?? english]);
	}, [i18n, selectedLanguage]);

	return (
		<Box flexDirection="column" alignItems="center" alignSelf="center">
			{selectedPage !== 'Snake' && <Title />}
			{selectedPage === 'Language' && (
				<Select
					options={languages}
					onChange={(language: string) => {
						setSelectedPage('Home');
						setSelectedLanguage(language as Language);
					}}
				/>
			)}
			{selectedPage === 'Home' && (
				<>
					<Box marginBottom={2}>
						<About />
					</Box>
					<Select
						options={menuPages}
						onChange={(game: string) => {
							setSelectedPage(game as Page);
						}}
					/>
				</>
			)}
			{selectedPage === 'Games' && (
				<Select
					options={gamePages}
					onChange={(game: string) => {
						setSelectedPage(game as Page);
					}}
				/>
			)}
			{selectedPage === 'Snake' && <Snake />}
			<Box marginTop={2}>
				<Hints />
			</Box>
		</Box>
	);
};

export default Content;
