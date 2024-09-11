//this was a component to test a table structure and scrollbar feature for netas internship task
//this component has no relation with the UI itself

import React from "react";

const Table = ({ data }) => {
  return (
    <div className="flex flex-col h-screen max-h-full border border-gray-200 rounded shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100 h-12">
          <tr>
            <th className="px-4 py-2 text-left">Header 1</th>
            <th className="px-4 py-2 text-left">Header 2</th>
            <th className="px-4 py-2 text-left">Header 3</th>
          </tr>
        </thead>
      </table>
      <div className="flex-grow overflow-auto">
        <table className="w-full">
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-4 py-2">{row.col1}</td>
                <td className="px-4 py-2">{row.col2}</td>
                <td className="px-4 py-2">{row.col3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white border-t border-gray-200 p-4">
        Pagination goes here
      </div>
    </div>
  );
};

export default Table;

