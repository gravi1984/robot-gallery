import React from 'react';
import styles from './Robot.module.css';
import { appContext } from "../index";

interface RobotProps {
    id: number,
    name: string,
    email: string
}

// ES5 object => { f1, f2, f3 }
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  
    return (
        <appContext.Consumer>
            {(value) => {
                return (<div className={styles.robotItem}>
                    <img alt="robot" src={`https://robohash.org/${id}`} />
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>author: {value.username}</p>
                </div>);
            }

            }

        </appContext.Consumer>

    );
};

export default Robot;