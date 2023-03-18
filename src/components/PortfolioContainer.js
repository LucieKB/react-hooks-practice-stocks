import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {

  const stocksToDisplay = portfolio.map((stock)=>
<Stock key={stock.id} stock={stock}/>
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
