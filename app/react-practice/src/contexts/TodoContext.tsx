import { FC, ReactNode, createContext, useContext } from 'react';
import { useTodo } from '../hooks/useTodo';
import { Todo } from '../types/Todo.type';

type TodoContextType = {
	todos: Todo[];
	addTodo: (title: string) => void;
	updateTodo: (id: number, title: string) => void;
	deleteTodo: (id: number, title: string) => void;
};

const TodoContext = createContext({} as TodoContextType);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { todos, addTodo, updateTodo, deleteTodo } = useTodo();

	// console.log(`todos`);
	// console.log(todos);

	return (
		<TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => useContext(TodoContext);
