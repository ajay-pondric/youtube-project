import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from "./Components/Header";
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },

    ],
  },
]);

function App() {
  return (
   <Provider store={store}>
     <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
   </Provider>
  );
}

export default App;
