import React from "react";
import CurrencyFormat from "react-currency-format";

const currencyFormatter = ({ value, prefix }) => (
  <CurrencyFormat
    value={value}
    displayType={"text"}
    thousandSeparator={true}
    prefix={prefix}
  />
);

export default currencyFormatter;
