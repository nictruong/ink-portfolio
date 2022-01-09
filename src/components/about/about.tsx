import { Text } from 'ink';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = (): ReactElement => {
	const { t } = useTranslation();

	return <Text>{t('about.intro')}</Text>;
};

export default About;
