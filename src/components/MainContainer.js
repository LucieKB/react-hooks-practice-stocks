import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {
const [portfolio, setPortfolio]= useState([]);
 const [isInPortfolio, setIsInPortfolio]= useState(false)
  

   function handleSwitchToPortfolio(transferedStock){
  stocks.forEach((stock)=>{
    if(transferedStock.id === stock.id){
      (setPortfolio([...portfolio, transferedStock])
      ) 
 } })}

 function handleDeleteFromPortfolio(removedStock){
  const newPorfolioArray = portfolio.filter((stock => removedStock.id !== stock.id));
  setPortfolio(newPorfolioArray)}

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onHandleSwitch={handleSwitchToPortfolio} isInPortfolio={isInPortfolio} setStockIsInPortfolio={setIsInPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onHandleSwitch={handleDeleteFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

