import './App.css';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducers } from './store/index';
import Dashboard from './components/dashbord/Dashboard';

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middleware);

function App() {
  return (
    <StoreProvider store={store}>
      <Dashboard />
    </StoreProvider>
  );
}

export default App;
