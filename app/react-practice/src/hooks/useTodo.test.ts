import { act, renderHook } from '@testing-library/react';
import { useTodo } from './useTodo';
import { times } from 'remeda';

describe('useTodo', () => {
	describe('handleCreateTodo', () => {
		describe('正常系', () => {
			test('TODOが作成されること', () => {
				const { result } = renderHook(() => useTodo());
				const mockInput = jest.fn(() => ({
					target: { value: 'test' },
				})) as unknown as () => React.ChangeEvent<HTMLInputElement>;
				act(() => {
					result.current.handleChangeTitle(mockInput());
				});

				act(result.current.handleCreateTodo);
				expect(result.current.showTodos.length).toEqual(1);
				expect(result.current.showTodos[0].title).toEqual('test');
			});
		});

		describe('異常系', () => {
			describe('titleが空のとき', () => {
				test('TODOが作成されないこと', () => {
					const { result } = renderHook(() => useTodo());
					act(result.current.handleCreateTodo);
					expect(result.current.showTodos.length).toEqual(0);
				});
			});
		});
	});

	describe('handleDeleteTodo', () => {
		const initTodo = () => {
			// 削除用にTODOを1つ作成する
			const { result } = renderHook(() => useTodo());

			const mockInput = jest.fn(() => ({
				target: { value: 'test' },
			})) as unknown as () => React.ChangeEvent<HTMLInputElement>;
			act(() => {
				result.current.handleChangeTitle(mockInput());
			});

			act(result.current.handleCreateTodo);

			return result;
		};

		test('指定したTODOが削除されること', () => {
			const result = initTodo();

			const id = result.current.showTodos[0].id;
			const title = result.current.showTodos[0].title;

			window.confirm = jest.fn(() => true);
			act(() => result.current.handleDeleteTodo(id, title));
			expect(result.current.showTodos.length).toEqual(0);
		});

		describe('確認ダイアログでキャンセルした場合', () => {
			test('指定したTODOが削除されずに残ること', () => {
				const result = initTodo();

				const id = result.current.showTodos[0].id;
				const title = result.current.showTodos[0].title;

				window.confirm = jest.fn(() => false);
				act(() => result.current.handleDeleteTodo(id, title));
				expect(result.current.showTodos.length).toEqual(1);
			});
		});
	});

	describe('showTodos', () => {
		const initTodo = () => {
			// 一覧用にTODOを3つ作成する
			const { result } = renderHook(() => useTodo());

			times(3, (i) => {
				const mockInput = jest.fn(() => ({
					target: { value: `test${i}` },
				})) as unknown as () => React.ChangeEvent<HTMLInputElement>;
				act(() => {
					result.current.handleChangeTitle(mockInput());
				});

				act(result.current.handleCreateTodo);
			});

			return result;
		};

		test('TODOが全て含まれること', () => {
			const result = initTodo();

			expect(result.current.showTodos.length).toEqual(3);
		});

		describe('検索するとき', () => {
			test('検索ワードが含まれるTODOのみが含まれること', () => {
				const result = initTodo();

				// 1番目のTODOのみが含まれるように検索キーワードを設定
				const mockInput = jest.fn(() => ({
					target: { value: 'test1' },
				})) as unknown as () => React.ChangeEvent<HTMLInputElement>;
				act(() => {
					result.current.handleChangeSearchKeyword(mockInput());
				});

				expect(result.current.showTodos.length).toEqual(1);
				expect(result.current.showTodos[0].title).toEqual('test1');
			});
		});
	});
});
