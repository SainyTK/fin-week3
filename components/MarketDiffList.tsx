import React from "react";

const MarketDiffList = () => {
  return (
    <div>
      <h3 className="text-left text-3xl font-bold">List</h3>
      <div>
        <table className="bg-white rounded-t-lg rounded-b-lg">
          <thead>
            <tr>
              <th className="p-4">Token 1</th>
              <th className="p-4">Token 2</th>
              <th className="p-4">Binance</th>
              <th className="p-4">FTX</th>
              <th className="p-4">Diff</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">BTC</td>
              <td className="p-4">USDT</td>
              <td className="p-4">40,000</td>
              <td className="p-4">40,000</td>
              <td className="p-4">-0.049%</td>
              <td className="p-4">
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td className="p-4">BTC</td>
              <td className="p-4">USDT</td>
              <td className="p-4">40,000</td>
              <td className="p-4">40,000</td>
              <td className="p-4">-0.049%</td>
              <td className="p-4">
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketDiffList;
