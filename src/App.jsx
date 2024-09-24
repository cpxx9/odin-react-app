import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const issueUrl =
  'https://api-sage-two-60.vercel.app/mocks/issues/1?delay=2000';

const sidebarUrl =
  'https://api-sage-two-60.vercel.app/mocks/sidebar?delay=1000';

const commentsUrl =
  'https://api-sage-two-60.vercel.app/mocks/comments?delay=3000';

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

const Sidebar = () => {
  return;
};

const Comments = () => {
  const { data } = useData(commentsUrl);

  // show loading state while waiting for the data
  if (!data) return 'loading';

  // rendering comments now that we have access to them!
  return data.map((comment) => <div>{comment.title}</div>);
};

const Issue = () => {
  const { data } = useData(issueUrl);

  // show loading state while waiting for the data
  if (!data) return 'loading';

  // render actual issue now that the data is here!
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Comments />
    </div>
  );
};

function App() {
  const { data } = useData(sidebarUrl);

  // show loading state while waiting for the data
  if (!data) return 'loading';

  return (
    <>
      <Sidebar data={data} />
      <Issue />
    </>
  );
}

export default App;
