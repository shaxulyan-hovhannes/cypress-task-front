import React from "react";
import PropTypes from "prop-types";

const ActionComponent = ({ buyItems = [], onBuy = () => {} }) => {
  return (
    <div className="buy-widget-action">
      <div className="buy-widget-action-total">
        <span>Total</span>
        <span>{buyItems.reduce((acc, cur) => acc + cur.price, 0)}$</span>
      </div>
      <div className="buy-widget-action-submit" onClick={onBuy}>
        Buy
      </div>
    </div>
  );
};

ActionComponent.propTypes = {
  buyItems: PropTypes.array,
  onBuy: PropTypes.func,
};

export default ActionComponent;
