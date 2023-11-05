import { Provider } from 'react-redux'
import store from './store';
import { RouterProvider } from 'react-router-dom';
import appRouter from './core/navigation/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App