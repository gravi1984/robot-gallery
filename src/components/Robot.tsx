import React, { useContext } from 'react';
import styles from './Robot.module.css';
import { appContext, appSetStateContext} from "../AppState";
import ShoppingCart from './ShoppingCart';

interface RobotProps {
    id: number,
    name: string,
    email: string
}

// ES5 object => { f1, f2, f3 }
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {

    // use context export from index
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext)

    const addToCart = () => {
        if(setState){ // ?: undefine
            setState(state => {
                return {
                    ...state,
                    shoppingCart:{
                        items: [...state.shoppingCart.items, {id, name}]
                    }
                }
            })
        }
    }
    return (

        <div className={styles.robotItem}>
            <img alt="robot" src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>author: {value.username}</p>
            <button onClick={addToCart}>add to cart</button>
        </div>
    );
};

export default Robot;