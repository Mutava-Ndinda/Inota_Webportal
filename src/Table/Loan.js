// import React from 'react';
import './Loan.css'; // Import the CSS file

// const Loan = () => {
//     // Sample data for the table
//     const loanData = [
//         { regNo: '001', name: 'Alice Johnson', loanGiven: 'Personal Loan', amountDue: 5000, amountPaid: 2000, balance: 3000 },
//         { regNo: '002', name: 'Bob Smith', loanGiven: 'Car Loan', amountDue: 15000, amountPaid: 5000, balance: 10000 },
//         { regNo: '003', name: 'Charlie Brown', loanGiven: 'Home Loan', amountDue: 25000, amountPaid: 10000, balance: 15000 },
//         { regNo: '004', name: 'Diana Prince', loanGiven: 'Education Loan', amountDue: 8000, amountPaid: 3000, balance: 5000 },
//         { regNo: '005', name: 'Ethan Hunt', loanGiven: 'Business Loan', amountDue: 20000, amountPaid: 12000, balance: 8000 },
//     ];

//     return (
//         <div className="loan-table">
//             <h2>Loan Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Reg No</th>
//                         <th>Name</th>
//                         <th>Loan Given</th>
//                         <th>Amount Due</th>
//                         <th>Amount Paid</th>
//                         <th>Balance</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {loanData.map((loan, index) => (
//                         <tr key={index}>
//                             <td>{loan.regNo}</td>
//                             <td>{loan.name}</td>
//                             <td>{loan.loanGiven}</td>
//                             <td>{loan.amountDue}</td>
//                             <td>{loan.amountPaid}</td>
//                             <td>{loan.balance}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Loan;


import React, { useState, useEffect } from 'react';
const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 class="loan-repayments">Loan Repayments</h1><br></br><br></br><br></br>
    <table className='loans-table'>
      <thead>
        <tr>
          <th>Reg No</th>
          <th>Name</th>
          <th>Loan Given</th>
          <th>Amount Due</th>
          <th>Amount Paid</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>John Doe</td>
          <td>1000</td>
          <td>500</td>
          <td>300</td>
          <td>200</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Jane Smith</td>
          <td>1500</td>
          <td>800</td>
          <td>600</td>
          <td>200</td>
        </tr>
        <tr>
          <td>003</td>
          <td>Mike Johnson</td>
          <td>2000</td>
          <td>1000</td>
          <td>800</td>
          <td>200</td>
        </tr>
        <tr>
          <td>004</td>
          <td>Sarah Williams</td>
          <td>1200</td>
          <td>600</td>
          <td>400</td>
          <td>200</td>
        </tr>
        <tr>
          <td>005</td>
          <td>David Brown</td>
          <td>800</td>
          <td>900</td>
          <td>700</td>
          <td>200</td>
        </tr>
      </tbody>
      {/* <style>
        {`
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
          line-height:325%
        }
        th {
          background-color: #F2F2F2;
          font-weight: bold;
          line-height:465%
        }
        .loan-repayments{
          margin-top:10%;
          margin-left:40%
        }
        .loans-table{
          width:75%;
          margin-left:10%
        }
        `}
      </style> */}
    </table>
    </div>
  );
};
export default Table;
// import React, { useState, useEffect } from 'react';
// const Table = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Reg No</th>
//           <th>Name</th>
//           <th>Loan Given</th>
//           <th>Amount Due</th>
//           <th>Amount Paid</th>
//           <th>Balance</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.id}>
//             <td>{row.regNo}</td>
//             <td>{row.name}</td>
//             <td>{row.loanGiven}</td>
//             <td>{row.amountDue}</td>
//             <td>{row.amountPaid}</td>
//             <td>{row.balance}</td>
//           </tr>
//         ))}
//       </tbody>
//       <style>
//         {`
//         table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-bottom: 20px;
//         }
//         th,
//         td {
//           padding: 8px;
//           text-align: left;
//           border-bottom: 1px solid #ddd;
//         }
//         th {
//           background-color: #F2F2F2;
//           font-weight: bold;
//         }
//         `}
//       </style>
//     </table>
//   );
// };
// export default Table;