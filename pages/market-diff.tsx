import React from "react";
import MarketDiffForm from "../components/MarketDiffForm";
import MarketDiffList from "../components/MarketDiffList";
import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";

const MarketDiff = () => {
  return (
    <NavLayout>
      <div className="bg-lightbg min-h-screen">
        <div className="flex justify-center w-full px-16 relative mb-14">
          <MarketDiffForm />
          <div className="bg-darkbg h-full w-full absolute -top-20" />
        </div>
        <div className="flex w-full px-16">
          <MarketDiffList />
        </div>
      </div>
    </NavLayout>
  );
};

export default MarketDiff;
