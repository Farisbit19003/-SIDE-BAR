import React from "react";
import { BsPrinter } from "react-icons/bs";
import { useSelector } from "react-redux";

const InvoicePDF = () => {
  const { loggedIn, siteSetting } = useSelector((state) => ({ ...state }));
  const role = loggedIn && loggedIn.user && loggedIn.user.role;

  const printInvoice = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
    <html>
<head>
  <title>Print Invoice</title>
  <style>
    body {
      padding: 20px;
    }
  </style>
</head>
<body>
  <div style="display: flex; flex-direction: column; border: 2px dashed #248F59; padding: 2px;">
    <div style="display: flex; justify-content: center; align-items: center;">
    <img src="${siteSetting?.image?.url || 'http://res.cloudinary.com/die5mkbau/image/upload/v1683410253/zusdxoommia3lwtkzzk4.svg'}" alt="logo" style="object-fit: cover;">
</div>
    <h1 style="font-size: 4xl; font-family: serif; color: #248F59; font-weight: normal; margin-bottom: 4px;">Invoice</h1>
    <div style="padding: 4px;">
      <div style="display: flex; flex-direction: column; margin-bottom: 3px; font-family: sans-serif;">
        <h1 style="font-weight: bold;">Customer</h1>
        <p>Faris Irfan</p>
        <p>farisirfanbit19.03@gmail.com</p>
        <p>0324-1064796</p>
      </div>
      <div style="overflow-x: auto; display: flex; flex-direction: column; justify-content: center;">
      <table style="margin: 2px; font-family: sans-serif; border:solid 2px #248F59;  border-radius: 0.375rem; padding:3px;">
      <thead>
      <tr style="background-color: #F2F2F2; display: flex; flex-direction: row; justify-content: space-between;">
        <th style="padding: 2px 4px; white-space: nowrap;">Product</th>
        <th style="padding: 2px 4px; white-space: nowrap;">Quantity</th>
        <th style="padding: 2px 4px; white-space: nowrap;">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: white;  cursor: default; white-space: nowrap; justify-content: space-between; display: flex; flex-direction: row; border: 2px solid #248F59; margin-bottom: 2px;">
        <td style="padding: 2px 4px; display: flex; align-items: center; ">Product 1</td>
        <td style="padding: 2px 4px; display: flex; align-items: center; ">3</td>
        <td style="padding: 2px 4px; display: flex; align-items: center; ">$10</td>
      </tr>
      <tr style="background-color: white; cursor: default; white-space: nowrap; display: flex; justify-content: space-between; flex-direction: row; border: 2px solid #248F59; margin-bottom: 2px;">
        <td style="padding: 2px 4px; display: flex; align-items: center; ">Product 2</td>
        <td style="padding: 2px 4px; display: flex; align-items: center; ">3</td>
        <td style="padding: 2px 4px; display: flex; align-items: center; ">$10</td>
      </tr>
    </tbody>
    
    </table>
    
      </div>

     

      <div style="display: flex; flex-direction: column; background-color: white; padding: 3px; margin-top: 2px; margin-bottom: 2px; gap: 2px;">
        <div style="display: flex; flex-direction: column; border: 2px solid #248F59; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); border-radius: 0.375rem; padding: 5px;">
          <div style="margin-bottom: 4px;">
            <span style="margin-bottom: 2px; display: block; font-size: 0.875rem; font-weight: bold; color: #000;">Shipping Address</span>
            <span style="font-size: 0.875rem; color: #000;">Gujranwala</span>
          </div>
        </div>

        <div style="display: flex; border: 2px solid #248F59; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); border-radius: 0.375rem; flex-direction: column; padding: 5px;">
          <div style="margin-bottom: 3px; display: flex; justify-content: space-between;">
            <span style="font-size: 0.875rem; color: #000;">Sub Total<span style="margin-left: 1px; margin-right: auto;" class="ltr:mr-auto rtl:ml-auto">:</span></span>
            <span style="font-size: 0.875rem; color: #000;">23455PKR</span>
          </div>

          <div style="margin-bottom: 3px; display: flex; justify-content: space-between;">
            <span style="font-size: 0.875rem; color: #000;">Delivery Fee<span style="margin-left: 1px; margin-right: auto;" class="ltr:mr-auto rtl:ml-auto">:</span></span>
            <span style="font-size: 0.875rem; color: #000;">500</span>
          </div>

          <div style="margin-bottom: 3px; display: flex; justify-content: space-between;">
            <span style="font-size: 0.875rem; color: #000;">TAX<span style="margin-left: 1px; margin-right: auto;" class="ltr:mr-auto rtl:ml-auto">:</span></span>
            <span style="font-size: 0.875rem; color: #000;">0.000012%</span>
          </div>

          <div style="display: flex; justify-content: space-between;">
            <span style="font-size: 0.875rem; font-weight: bold; color: #000;">Total<span style="margin-left: 1px; margin-right: auto;" class="ltr:mr-auto rtl:ml-auto">:</span></span>
            <span style="font-size: 0.875rem; font-weight: bold; color: #000;">2800PKR</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</body>
</html>


    
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex flex-row justify-end p-2">
      <button
        onClick={printInvoice}
        className="bg-[#248f58] flex flex-row gap-2 rounded-md shadow text-[#f2f2f2] font-normal font-sans py-2 px-4 mt-4"
      >
        <BsPrinter className="align-middle" size={20}/>
        Print Invoice
      </button>
    </div>
  );
};

export default InvoicePDF;
