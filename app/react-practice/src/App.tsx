import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { TodoProvider } from './contexts/TodoContext';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			{/* <TodoPage /> */}
			<TodoProvider>
				<RouterProvider router={router} />
			</TodoProvider>
		</div>
	);
}

export default App;
