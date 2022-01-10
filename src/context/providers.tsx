import React from 'react';

import HintProvider from './hint-provider';
import LanguageProvider from './language-provider';
import MenuProvider from './menu-provider';

type ProvidersProps = {
	children: React.ReactChild;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => (
	<LanguageProvider>
		<HintProvider>
			<MenuProvider>{children}</MenuProvider>
		</HintProvider>
	</LanguageProvider>
);

export default Providers;
