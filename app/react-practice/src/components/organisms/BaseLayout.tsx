import { ReactNode } from 'react';
import { Navigation } from '../molecules/Navigation';

type Props = {
	children: ReactNode;
};

export const BaseLayout = (props: Props) => {
	const { children } = props;

	return (
		<>
			<Navigation />
			<div>{children}</div>
		</>
	);
};
