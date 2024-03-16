type Props = {
	handleChangeSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTodo = (props: Props) => {
	const { handleChangeSearchKeyword } = props;

	return (
		<>
			<input type="text" placeholder="fill search keyword" onChange={handleChangeSearchKeyword} />
		</>
	);
};
