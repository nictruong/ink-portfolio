import { Text } from 'ink';
import Gradient from 'ink-gradient';
import SelectInput from 'ink-select-input/build';
import React, { ReactElement } from 'react';

import { capitalize } from '../../utils/utils';

type Color =
	| 'cristal'
	| 'teen'
	| 'mind'
	| 'morning'
	| 'vice'
	| 'passion'
	| 'fruit'
	| 'instagram'
	| 'atlas'
	| 'retro'
	| 'summer'
	| 'pastel'
	| 'rainbow';

const colors = [
	'cristal',
	'teen',
	'mind',
	'morning',
	'vice',
	'passion',
	'fruit',
	'instagram',
	'atlas',
	'retro',
	'summer',
	'pastel',
	'rainbow',
];

type SelectProps = {
	onChange: (value: string) => void;
	options: string[];
};
const Select: React.FC<SelectProps> = ({ onChange, options }): ReactElement => {
	const items = options.map((page) => ({
		value: page,
		label: capitalize(page),
	}));

	const colorMapping = Object.fromEntries(items.map(({ label }, i) => [label, colors[i % colors.length]]));

	return (
		<SelectInput
			items={items}
			initialIndex={undefined}
			onSelect={({ value }) => {
				onChange(value);
			}}
			itemComponent={({ isSelected, label }) =>
				isSelected ? (
					<Gradient name={colorMapping[label] as Color}>
						<Text>{label}</Text>
					</Gradient>
				) : (
					<Text>{label}</Text>
				)
			}
		/>
	);
};

export default Select;
