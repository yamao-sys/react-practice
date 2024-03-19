import { NavigationLink } from '../atoms/NavigationLink';

export const Navigation = () => {
	return (
		<>
			<NavigationLink path="/" title="TOP" />
			<NavigationLink path="/new" title="CREATE" />
		</>
	);
};
