import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onHandleSwitch, isInPortfolio, setStockIsInPortfolio}) {
  
const stocksToDisplay = stocks.map((stock)=>
<Stock key={stock.id} stock={stock} onHandleSwitch={onHandleSwitch} isInPortfolio={isInPortfolio} setStockIsInPortfolio={setStockIsInPortfolio}/>
)

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
