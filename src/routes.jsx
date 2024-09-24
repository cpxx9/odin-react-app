import App from './App';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import DefaultProfile from './components/DefaultProfile';
import { useEffect } from 'react';

const useData = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setState(data);
    };
    dataFetch();
  }, [url]);
  return { data: state };
};

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <DefaultProfile />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];

export default routes;
