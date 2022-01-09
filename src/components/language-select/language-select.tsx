import { Text } from 'ink';
import Gradient from 'ink-gradient';
import SelectInput from 'ink-select-input/build';
import React, { ReactElement, useContext } from 'react';

import { LanguageContext } from '../../context/language-provider';
import { capitalize, languages } from '../../utils/utils';

const items = languages.map((lang) => ({ value: lang, label: capitalize(lang) }));
type languageColors = 'teen' | 'instagram' | 'morning';
const colors: languageColors[] = ['teen', 'instagram', 'morning'];
const colorMapping = Object.fromEntries(items.map(({ label }, i) => [label, colors[i]]));

const LanguageSelect: React.FC = (): ReactElement => {
	const { setSelectedLanguage } = useContext(LanguageContext);

	return (
		<SelectInput
			items={items}
			initialIndex={undefined}
			onSelect={({ value }) => {
				setSelectedLanguage(value);
			}}
			itemComponent={({ isSelected, label }) =>
				isSelected ? (
					<Gradient name={colorMapping[label] as languageColors}>
						<Text>{label}</Text>
					</Gradient>
				) : (
					<Text>{label}</Text>
				)
			}
		/>
	);
};

export default LanguageSelect;
