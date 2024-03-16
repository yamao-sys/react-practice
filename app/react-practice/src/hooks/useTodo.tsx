import { useMemo, useState } from 'react';
import { Todo } from '../types/Todo.type';

export const useTodo = () => {
	const INIT_UNIQUI_ID = 0;

	const [todos, setTodos] = useState<Todo[]>([]);
	const [uniqueId, setUniqueId] = useState<number>(INIT_UNIQUI_ID);
	const [title, setTitle] = useState<string>('');
	const [searchKeyword, setSearchKeyword] = useState<string>('');

	// TODOの入力フォーム
	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

	// TODO作成
	const handleCreateTodo = () => {
		if (!title) return;

		const nextUniqueId = uniqueId + 1;

		// スプレッド構文でTODOの追加
		setTodos([...todos, { id: nextUniqueId, title }]);
		// 入力タイトルをリセット
		setTitle('');
		// IDを更新
		setUniqueId(nextUniqueId);
	};

	// TODO削除
	const handleDeleteTodo = (id: number, title: string) => {
		if (!window.confirm(`${title}のTODOを削除しますか？`)) return;

		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	// TODO検索入力のstate更新
	const handleChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value);

	const showTodos = useMemo(() => {
		const regexp = new RegExp(searchKeyword, 'i');
		return todos.filter((todo) => todo.title.match(regexp));
	}, [todos, searchKeyword]);

	return {
		handleChangeTitle,
		handleCreateTodo,
		handleDeleteTodo,
		handleChangeSearchKeyword,
		showTodos,
	};
};
