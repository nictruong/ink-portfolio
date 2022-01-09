import React, { createContext, useState } from 'react';

type IHintContext = { showHints: boolean; toggleHints: () => void };

export const HintContext = createContext<IHintContext>({
	showHints: false,
	toggleHints: () => null,
});

type HintProviderProps = {
	children: React.ReactChild;
};

const HintProvider: React.FC<HintProviderProps> = ({ children }) => {
	const [showHints, setShowHints] = useState(false);

	const toggleHints = () => {
		setShowHints(!showHints);
	};

	return <HintContext.Provider value={{ showHints, toggleHints }}>{children}</HintContext.Provider>;
};

export default HintProvider;
