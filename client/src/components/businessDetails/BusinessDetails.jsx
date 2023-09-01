import React from "react";
import PropTypes from "prop-types";
import "./BusinessDetails.css";

export const BusinessDetails = ({
    handleNameChange,
    handleContactChange,
    handleAddressChange,
    handleYearChange,
    handleAmountChange
  }) => {
  return (
    <form className="details-container">
        <input className="input" 
            placeholder="Enter Business Name" 
            onChange={(e)=>handleNameChange(e)}
        />
        <input className="input"
            placeholder="Enter Contact Details" 
            onChange={(e)=>handleContactChange(e)}
        />
        <textarea  className="input" 
            placeholder="Enter Customer Address" 
            onChange={(e)=>handleAddressChange(e)}
        />
        <input className="input" 
            placeholder="Enter Year of Business Establishment" 
            onChange={(e)=>handleYearChange(e)}/>
        <input className="input" 
            placeholder="Enter Load Amount" 
            onChange={(e)=>handleAmountChange(e)}/>
    </form>
  );
};

BusinessDetails.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    handleContactChange: PropTypes.func.isRequired,
    handleAddressChange: PropTypes.func.isRequired,
    handleYearChange: PropTypes.func.isRequired,
    handleAmountChange: PropTypes.func.isRequired
  };