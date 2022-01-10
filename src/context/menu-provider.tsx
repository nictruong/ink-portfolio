import React, { createContext, useState } from 'react';

import { Page } from '../utils/utils';

type IMenuContext = {
	selectedPage: Page | undefined;
	setSelectedPage: (page: Page | undefined) => void;
};

export const MenuContext = createContext<IMenuContext>({
	selectedPage: undefined,
	setSelectedPage: () => null,
});

type MenuProviderProps = {
	children: React.ReactChild;
};

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
	const [selectedPage, setSelectedPage] = useState<Page | undefined>();

	return <MenuContext.Provider value={{ selectedPage, setSelectedPage }}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
