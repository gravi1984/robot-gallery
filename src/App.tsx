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
  robotGallery: any;
  count:number
}


// functional component
class App extends React.Component<Props,State> {

  // Mount Componet 
  // virtual DOM,
  constructor(props){
    super(props);
    this.state = {
      robotGallery: [],
      count:0
    };
  }

  // call only once when Mount after DOM element created
  // last get called during init phrase
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => this.setState({robotGallery:data}));
  }
  // shouldComponentUpdate(){
  // return false;
  // }
  // componentDidUpdate(){

  // }

  

  render(){  return (
    <div className={styles.app}>

      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robot fantastic online shopping platform</h1>
      </div>
  
      <button onClick={()=>{
        // this.setState: arg1, arg2=>callback after async update State
        this.setState((preState, preProps) => {
          return {count: preState.count + 1}}, 
          () => {
          console.log("count: ", this.state.count);
        });

        this.setState((preState, preProps) => {
          return {count: preState.count + 1}}, 
          () => {
          console.log("count: ", this.state.count);
        });
        
      }}>
       Click 
      </button>
      <span>count: {this.state.count}</span> 

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
