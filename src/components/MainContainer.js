import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, setStocks}) {
  const [portfolio, setPortfolio]= useState([]);
  


  function handleSwitchToPortfolio(transferedStock){
    stocks.forEach((stock)=>{
      if(transferedStock.id === stock.id){
        (setPortfolio([...portfolio, transferedStock])
        ) 
   } })}


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onHandleSwitch={handleSwitchToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
