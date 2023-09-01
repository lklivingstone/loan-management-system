import React from "react";
import PropTypes from "prop-types";
import "./AccountingProvider.css";

export const AccountingProvider = ({ handleProviderChange }) => {
  return (
    <div className="container">
        <select className="select" onChange={(e) => handleProviderChange(e)}>
            <option>Xero</option>
            <option>MYOB</option>
        </select>
    </div>
  );
};

AccountingProvider.propTypes = {
    handleProviderChange: PropTypes.func.isRequired
};