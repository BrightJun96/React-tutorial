import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data/data";
const Invoice = () => {
  //만약 param이 여러개라면?
  //param은 내가 가지고 있는 param들을 객체에 모아서 받는다.
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const invoice = getInvoice(parseInt(invoiceId, 10));

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Total Due : {invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due Date : {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

export default Invoice;
