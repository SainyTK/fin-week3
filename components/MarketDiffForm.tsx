import React from "react";

const MarketDiffForm = () => {
  return (
    <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
      <form>
        <h3 className="text-3xl font-bold text-center mb-7">Market Diff</h3>
        <div className="flex justify-center mb-5 space-x-12">
          <div>
            <p className="text-lg">Token 1</p>
            <input
              type="text"
              placeholder="Fill in token"
              className="p-2 rounded shadow w-full"
            />
          </div>
          <div>
            <p className="text-lg">Token 2</p>
            <input
              type="text"
              placeholder="Fill in token"
              className="p-2 rounded shadow w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-darkbg text-white px-12 py-4 ">Fetch</button>
        </div>
      </form>
    </div>
  );
};

export default MarketDiffForm;
