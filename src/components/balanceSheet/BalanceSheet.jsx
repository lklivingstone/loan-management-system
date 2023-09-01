import React from "react";
import PropTypes from "prop-types";
import "./BalanceSheet.css";

export const BalanceSheet = ({ sheet }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Profit/Loss</th>
            <th>Assets Value</th>
          </tr>
        </thead>
        <tbody>
          {sheet.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.month}</td>
              <td>{item.profitOrLoss}</td>
              <td>{item.assetsValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BalanceSheet.propTypes = {
  sheet: PropTypes.array.isRequired
};