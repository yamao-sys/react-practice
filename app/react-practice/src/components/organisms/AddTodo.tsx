type Props = {
	handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
	handleCreateTodo: () => void
}

export const AddTodo = (props: Props) => {
	const { handleChangeTitle, handleCreateTodo } = props;

	return (
		<>
			<input type="text" placeholder="Todo title" onChange={handleChangeTitle} />
			<button onClick={handleCreateTodo}>追加</button>
		</>
	)
}
