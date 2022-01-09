import React, { createContext, useState } from 'react';

import { Language } from '../utils/utils';

type ILanguageContext = {
	selectedLanguage: Language | undefined;
	setSelectedLanguage: (lang: Language | undefined) => void;
};

export const LanguageContext = createContext<ILanguageContext>({
	selectedLanguage: undefined,
	setSelectedLanguage: () => null,
});

type LanguageProviderProps = {
	children: React.ReactChild;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState<Language | undefined>();

	return (
		<LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>{children}</LanguageContext.Provider>
	);
};

export default LanguageProvider;
