import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onHandleSwitch}) {

  const stocksToDisplay = portfolio.map((stock)=>
<Stock key={stock.id} stock={stock} onHandleSwitch={onHandleSwitch}/>
)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
      stocksToDisplay
      }
    </div>
  );
}

export default PortfolioContainer;
