import React from 'react';

import HintProvider from './hint-provider';
import LanguageProvider from './language-provider';
import PageProvider from './Page-provider';

type ProvidersProps = {
	children: React.ReactChild;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => (
	<LanguageProvider>
		<HintProvider>
			<PageProvider>{children}</PageProvider>
		</HintProvider>
	</LanguageProvider>
);

export default Providers;
