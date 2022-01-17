import React, { createContext, useState } from 'react';

import { Page } from '../utils/utils';

type IPageContext = {
	selectedPage: Page | undefined;
	setSelectedPage: (page: Page | undefined) => void;
};

export const PageContext = createContext<IPageContext>({
	selectedPage: 'Language',
	setSelectedPage: () => null,
});

type PageProviderProps = {
	children: React.ReactChild;
};

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
	const [selectedPage, setSelectedPage] = useState<Page | undefined>('Language');

	return <PageContext.Provider value={{ selectedPage, setSelectedPage }}>{children}</PageContext.Provider>;
};

export default PageProvider;
