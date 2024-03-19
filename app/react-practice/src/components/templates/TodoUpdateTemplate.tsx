import { useNavigate, useParams } from 'react-router-dom';
import { useTodoContext } from '../../contexts/TodoContext';
import { useCallback, useMemo, useState } from 'react';
import { BaseLayout } from '../organisms/BaseLayout';

export const TodoUpdateTemplate = () => {
	const { todos, updateTodo } = useTodoContext();
	const { id } = useParams<{ id: string }>();
	const navigator = useNavigate();

	const todo = useMemo(
		() => todos.find((todo) => todo.id === Number(id)),
		[todos, id],
	);

	const [inputTitle, setInputTitle] = useState<string>(todo?.title ?? '');

	const handleChangeTitle = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setInputTitle(e.target.value),
		[setInputTitle],
	);

	const handleUpdateTodo = useCallback(() => {
		if (!todo) return;

		updateTodo(todo.id, inputTitle);
		navigator('/');
	}, [todo, updateTodo, inputTitle, navigator]);

	return (
		<BaseLayout>
			<input
				type="text"
				value={inputTitle}
				placeholder="Todo Title"
				onChange={handleChangeTitle}
			/>
			<button onClick={handleUpdateTodo}>保存</button>
		</BaseLayout>
	);
};
