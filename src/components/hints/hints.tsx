import { Box, Text, useInput } from 'ink';
import open from 'open';
import React, { ReactElement, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { HintContext } from '../../context/hint-provider';
import { LanguageContext } from '../../context/language-provider';
import { MenuContext } from '../../context/menu-provider';

const linkedInUrl = 'https://www.linkedin.com/in/nicolastruong/';

const Hints: React.FC = (): ReactElement => {
	const { showHints, toggleHints } = useContext(HintContext);
	const { setSelectedPage } = useContext(MenuContext);
	const { setSelectedLanguage } = useContext(LanguageContext);
	const { t } = useTranslation();

	useInput((i) => {
		const input = i.toLowerCase();
		if (input === 'h') {
			toggleHints();
			return;
		}

		if (input === 'l') {
			setSelectedLanguage(undefined);
			return;
		}

		if (input === 'm') {
			setSelectedPage(undefined);
		}

		if (input === 'p') {
			open(linkedInUrl).then();
			return;
		}
	});

	return (
		<Box flexDirection="column" borderStyle="round" minWidth={20}>
			<Text>[h] {showHints ? t('hints.hideHelp') : t('hints.showHelp')}</Text>
			{showHints && (
				<>
					<Text>[l] {t('hints.language')}</Text>
					<Text>[m] Back to menu</Text>
					<Text>[esc] Exit</Text>
					<Text>[p] LinkedIn</Text>
				</>
			)}
		</Box>
	);
};

export default Hints;
