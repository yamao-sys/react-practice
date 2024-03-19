import { useCallback, useMemo, useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';

export const TodoIndexTemplate = () => {
	const { todos } = useTodoContext();

	const navigate = useNavigate();

	const [searchKeyword, setSearchKeyword] = useState('');

	const handleChangeSearchKeyword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setSearchKeyword(e.target.value),
		[setSearchKeyword],
	);

	const showTodos = useMemo(() => {
		if (searchKeyword) {
			const regexp = new RegExp(searchKeyword, 'i');
			return todos.filter((todo) => todo.title.match(regexp));
		}

		return todos;
	}, [todos, searchKeyword]);

	const handleMoveEditPage = useCallback(
		(id: number) => {
			navigate(`/edit/${id}`);
		},
		[navigate],
	);

	return (
		<>
			<input
				type="text"
				placeholder="Search Keyword"
				onChange={handleChangeSearchKeyword}
			/>
			{showTodos.map((todo) => (
				<div key={todo.id}>
					{todo.title}
					<button onClick={() => handleMoveEditPage(todo.id)}>編集</button>
				</div>
			))}
		</>
	);
};
