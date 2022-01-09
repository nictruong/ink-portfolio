import i18n from 'i18next';
import { Box } from 'ink';
import React, { FC } from 'react';
import { initReactI18next } from 'react-i18next';

import Content from './components/content/content';
import Title from './components/title/title';
import Providers from './context/providers';
import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';
import common_ja from './translations/ja/common.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				translation: common_en,
			},
			fr: {
				translation: common_fr,
			},
			ja: {
				translation: common_ja,
			},
		},
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

const App: FC<{ name?: string }> = () => (
	<Providers>
		<Box flexDirection="column" alignItems="center" justifyContent="center" width="100%">
			<Title />
			<Content />
		</Box>
	</Providers>
);

export default App;
