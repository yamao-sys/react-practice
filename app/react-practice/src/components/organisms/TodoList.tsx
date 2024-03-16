type Todo = {
	id: number;
	title: string;
}

type Props = {
	todos: Todo[],
	handleDeleteTodo: (id: number, title: string) => void,
}

export const TodoList = (props: Props) => {
	const { todos, handleDeleteTodo } = props;
	
	return (
		<div>
			{!!todos.length && (todos.map((todo) => (
				<div style={{ display: 'flex' }}>
					<div>{todo.title}</div>
					<button onClick={() => handleDeleteTodo(todo.id, todo.title)}>削除</button>
				</div>
			)))}
		</div>
	);
}
