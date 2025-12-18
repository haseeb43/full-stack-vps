import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // local
    // fetch('http://localhost:5006/api/message')
    // deployed
    fetch('http://69.62.64.113:5006/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <h1>Full Stack Deployment with Vite and React</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
