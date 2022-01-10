import { Text } from 'ink';
import Gradient from 'ink-gradient';
import SelectInput from 'ink-select-input/build';
import React, { ReactElement, useContext } from 'react';

import { MenuContext } from '../../context/menu-provider';
import { capitalize, pages } from '../../utils/utils';

const items = pages.map((page) => ({
	value: page,
	label: capitalize(page),
}));

type menuColors = 'teen' | 'instagram' | 'morning';
const colors: menuColors[] = ['teen'];
const colorMapping = Object.fromEntries(items.map(({ label }, i) => [label, colors[i]]));

const Menu: React.FC = (): ReactElement => {
	const { setSelectedPage } = useContext(MenuContext);

	return (
		<SelectInput
			items={items}
			initialIndex={undefined}
			onSelect={({ value }) => {
				setSelectedPage(value);
			}}
			itemComponent={({ isSelected, label }) =>
				isSelected ? (
					<Gradient name={colorMapping[label] as menuColors}>
						<Text>{label}</Text>
					</Gradient>
				) : (
					<Text>{label}</Text>
				)
			}
		/>
	);
};

export default Menu;
