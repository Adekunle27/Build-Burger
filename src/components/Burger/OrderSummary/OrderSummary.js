import React, { Component } from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import Button from "../../UI/Button/Button";



// import { Route, NavLink } from 'react-router-dom';


class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class
  componentDidUpdate() {
    // console.log('[OrderSummary DidUpdate!]')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the followimg ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
