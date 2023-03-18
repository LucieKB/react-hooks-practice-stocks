import React, {useEffect, useState} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks]=useState([])
//     {
// id:stocks.id,
// ticker:stocks.ticker,
// name:stocks.name,
// type:stocks.type,
// price:stocks.price,
// transfered:false
//   })

  useEffect(()=>{
  fetch ("http://localhost:3001/stocks")
  .then((r)=>r.json())
  .then ((stocks)=>setStocks(stocks));
},[]);
  
console.log(stocks)

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} setStocks={setStocks}/>
    </div>
  );
}

export default App;
