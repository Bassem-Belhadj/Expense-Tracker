 
 import React from "react";
import styled from "styled-components";
import {InnerLayout} from  '../../styles/Layouts'
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";
import { dollar } from "../../utils/icon";


function Dashboard() {
   const {totalExpenses , totalIncome, tolalBalance}= useGlobalContext()
return(
   <DashboardStyled>  
      <InnerLayout>
        <h1>Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
              <Chart />
              <div className="amount-con">
               <div className="income">
                  <p>Total Income</p>
                  {dollar} {totalIncome()}
               </div>
               <div className="expense">
                  <p>Total expense</p>
                  {dollar} {totalExpenses()}
               </div>
               <div className="balance">
                  <p>Total Balance</p>
                  {dollar} {tolalBalance()}
               </div>
              </div>
          </div>
        </div>
      </InnerLayout>
   </DashboardStyled> 
)

}
const DashboardStyled=styled.div`

`;
export default Dashboard