import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi"
//define prop state types: type /interface

interface Props {

}
interface State {
    isOpen: boolean
}


class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    // ts: any to refer any type; default not open any type mapping
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // e.target: which element e happen
        // e.currentTarget: which element handle e
        // this: dynamically mapping, this=handleClick => this=ShoppingCart Component

        console.log("e.target", e.target);
        console.log("e.currentTarget", e.currentTarget);

        if((e.target as HTMLButtonElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen })
        };
    }
        
       
    

    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button}
                    // setState: async, react optimized set sequence
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                    <span>cart 2 (unit)</span>
                </button>
                <div className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}

                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default ShoppingCart;