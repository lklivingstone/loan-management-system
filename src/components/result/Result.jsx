import React from "react";
import PropTypes from "prop-types";
import "./Result.css";

export const Result = ({
    approvedAmount
  }) => {
  return (
    <div className="result-container">
        <h1>Approved Amount: Rs {approvedAmount}</h1>
    </div>
  );
};

Result.propTypes = {
    approvedAmount: PropTypes.number.isRequired
};