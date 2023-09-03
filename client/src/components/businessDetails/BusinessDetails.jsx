import React from "react";
import PropTypes from "prop-types";
import "./BusinessDetails.css";

export const BusinessDetails = ({
    handleNameChange,
    handleContactChange,
    handleAddressChange,
    handleYearChange,
    handleAmountChange,
    name,
    contact,
    address,
    year,
    amount
  }) => {
  return (
    <form className="details-container">
        <input className="input" 
            placeholder="Enter Business Name" 
            onChange={(e)=>handleNameChange(e)}
            value={name}
            required 
        />
        <input className="input"
            placeholder="Enter Contact Details" 
            onChange={(e)=>handleContactChange(e)}
            value={contact}
            required 
        />
        <textarea  className="input" 
            placeholder="Enter Customer Address" 
            onChange={(e)=>handleAddressChange(e)}
            value={address}
            required 
        />
        <input className="input" 
            placeholder="Enter Year of Business Establishment" 
            onChange={(e)=>handleYearChange(e)}
            value={year}
            required 
        />
        <input className="input" 
            placeholder="Enter Load Amount" 
            onChange={(e)=>handleAmountChange(e)}
            value={amount}
            required 
        />
    </form>
  );
};

BusinessDetails.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    handleContactChange: PropTypes.func.isRequired,
    handleAddressChange: PropTypes.func.isRequired,
    handleYearChange: PropTypes.func.isRequired,
    handleAmountChange: PropTypes.func.isRequired,
    name :  PropTypes.string,
    contact :  PropTypes.string,
    address :  PropTypes.string,
    year :  PropTypes.number,
    amount :  PropTypes.number,
  };