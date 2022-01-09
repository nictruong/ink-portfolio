import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React, { ReactElement } from 'react';

const Title: React.FC = (): ReactElement => (
	<Gradient name="rainbow">
		<BigText text="nicolas truong" />
	</Gradient>
);

export default Title;
