import { createBrowserRouter } from 'react-router-dom';
import { TodoCreate } from '../pages/TodoCreate';
import { TodoIndex } from '../pages/TodoIndex';
import { TodoUpdate } from '../pages/TodoUpdate';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <TodoIndex />,
	},
	{
		path: '/new',
		element: <TodoCreate />,
	},
	{
		path: '/edit/:id',
		element: <TodoUpdate />,
	},
	{
		path: '*',
		element: '<>Not Found Page</>',
	},
]);
