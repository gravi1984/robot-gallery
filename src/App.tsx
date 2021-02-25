import React from 'react';
// import logo from './logo.svg';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


interface Props{}
interface State {
  // resource back from api, api return uncontrollable; 
  robotGallery: any
}


// functional component
class App extends React.Component<Props,State> {

  constructor(props){
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => this.setState({robotGallery:data}));
  }

  render(){  return (
    <div className={styles.app}>

      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robot fantastic online shopping platform</h1>
      </div>
  
      <ShoppingCart />
    
      <div>
      <ul className={styles.robotList}>
        {this.state.robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </ul>
      </div>

    </div>
  );
}

}

export default App;
