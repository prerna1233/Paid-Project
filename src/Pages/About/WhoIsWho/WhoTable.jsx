// import React from "react";

// function WhoTable({ title, data }) {
//   return (
//     <div className="table-section">
//       <div className="section-title">{title}</div>

//       <table className="who-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>Email</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.designation}</td>
//               <td>{item.email || "-"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* <div className="pagination">
//         Page - 1 of 5 <button>Next</button>
//       </div> */}
//     </div>
//   );
// }

// export default WhoTable;

function WhoTable({ title, data }) {
  if (data.length === 0) return null;

  return (
    <div className="table-section">
      <div className="section-title">{title}</div>

      <table className="who-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.email || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WhoTable;
