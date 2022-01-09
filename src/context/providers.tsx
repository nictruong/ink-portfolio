import React from 'react';

import HintProvider from './hint-provider';
import LanguageProvider from './language-provider';

type ProvidersProps = {
	children: React.ReactChild;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => (
	<LanguageProvider>
		<HintProvider>{children}</HintProvider>
	</LanguageProvider>
);

export default Providers;
