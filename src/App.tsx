import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


interface Props { }
interface State {
  // resource back from api, api return uncontrollable; 
  robotGallery: any;
  count: number
}


// functional component
const App: React.FC = (props) => {

  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `click ${count} times`
  }, [count]);

  // second param: monitor state[], if not update every update, dead call
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // .then(response => response.json())
        // .then(data => setRobotGallery(data))

        const data = await response.json();
        setRobotGallery(data);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }

    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>

      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robot fantastic online shopping platform</h1>
      </div>

      <button onClick={() => {
        setCount(count + 1);
        setCount(count + 1); // only increase 1 => useEffect()
      }}>
        Click
      </button>
      <span>count: {count}</span>

      <ShoppingCart />

      {/* {(!error || error !== "") && <div>error happen: {error}</div>} */}
      { !isLoading ? (

        <div>
          <ul className={styles.robotList}>
            {robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
          </ul>
        </div>) :

        <h2>Loading Data...</h2>
      }

    </div>
  );
}


export default App;
