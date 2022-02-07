import React from "react";

const InvoiceElement = ({ invoice }) => {
  return (
    <div>
      <ul>
        <li>name : {invoice.name}</li>
        <li>number:{invoice.number}</li>
        <li>price:{invoice.amount}</li>
        <li>due:{invoice.due}</li>
      </ul>
    </div>
  );
};

export default InvoiceElement;
