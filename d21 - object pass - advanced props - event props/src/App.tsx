import React from 'react';
import Customer from "./components/Customer";
import Customer2 from "./components/Customer2";
import CustomerDTO from "./dto/CustomerDTO";
import PersonLIst from "./components/PersonLIst";
import CustomerBtnEvent from "./components/button props/CustomerBtnEvent";


function App() {

  const cusDto = {
    cusId:'C001',
    cusName:'kamal'
  }

  const cusDto2:CustomerDTO={
    cusId:'C001',
    cusName:'amal',
    cusSalary:1234
  }

  const cusList:CustomerDTO []=[
    {
      cusId:'C001',
      cusName:'amal',
      cusSalary:1234
    },
    {
      cusId:'C002',
      cusName:'ruwan',
      cusSalary:1112
    },
    {
      cusId:'C003',
      cusName:'nuwan',
      cusSalary:2222
    }
  ]

  return (
    <div className="App">
      <Customer customerDTO={cusDto}/>
      <Customer2 customerDTO={cusDto2}/>
      <PersonLIst customerDTOList={cusList}/>
      <CustomerBtnEvent/>
    </div>
  );
}

export default App;
