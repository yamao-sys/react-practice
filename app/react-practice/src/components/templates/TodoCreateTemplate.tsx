import { useCallback, useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';
import { BaseLayout } from '../organisms/BaseLayout';

export const TodoCreateTemplate = () => {
	const { addTodo } = useTodoContext();

	const [title, setTitle] = useState<string>('');

	const navigate = useNavigate();

	const handleChangeTitle = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
		[setTitle],
	);

	const handleCreateTodo = useCallback(() => {
		addTodo(title);

		navigate('/');
	}, [addTodo, title, navigate]);

	return (
		<BaseLayout>
			<input
				type="text"
				placeholder="Todo title"
				onChange={handleChangeTitle}
			/>
			<button onClick={handleCreateTodo}>追加する</button>
		</BaseLayout>
	);
};
