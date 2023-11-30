import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";


function Incomes(){
return(
   <IncomeStyled>  
 <InnerLayout>
    <h2> Incomes </h2>
  <div className="icome-content">   
  <div className="from-container"></div>
  <div className="incomes"> 
  
  </div>
  </div>
</InnerLayout>   
   </IncomeStyled> 
)
}
const IncomeStyled = styled.div`

`;
export default Incomes