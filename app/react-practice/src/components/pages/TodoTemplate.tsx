import { AddTodo } from '../organisms/AddTodo';
import { TodoList } from '../organisms/TodoList';
import { SearchTodo } from '../organisms/SearchTodo';
import { useTodo } from '../../hooks/useTodo';

export const TodoTemplate = () => {
	const { handleChangeTitle, handleCreateTodo, handleDeleteTodo, handleChangeSearchKeyword, showTodos } = useTodo();

	return (
		<>
			<h1>Hello World</h1>
			<AddTodo handleChangeTitle={handleChangeTitle} handleCreateTodo={handleCreateTodo} />
			<SearchTodo handleChangeSearchKeyword={handleChangeSearchKeyword} />
			<TodoList todos={showTodos} handleDeleteTodo={handleDeleteTodo} />
		</>
	);
};
