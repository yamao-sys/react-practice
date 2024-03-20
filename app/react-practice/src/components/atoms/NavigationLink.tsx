import { Link } from 'react-router-dom';

type Props = {
	path: string;
	title: string;
};

export const NavigationLink = (props: Props) => {
	const { path, title } = props;

	return (
		<>
			<Link to={path}>{title}</Link>
		</>
	);
};
