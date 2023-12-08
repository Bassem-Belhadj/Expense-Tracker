import React, { useState, useContext } from "react";
import axios from "axios"
const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()
export const GlobalProvider =({children}) => {
    const [incomes, setIncomes] = useState ([])
    const [expenses, setExpenses] = useState ([])
    const [error, setError] = useState ([null])

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
                .catch((err)=> {
                    setError(err.response.data.message)
                }) 
                getIncomes()
    }
    const getIncomes = async () =>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }
    const deleteIncome = async(id) =>{
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }
    const totalIncome =()=>{
        let totalIncome =0;
        incomes.forEach((income)=>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome ;
    }
    
    //calculate Ecxpenses
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
                .catch((err)=> {
                    setError(err.response.data.message)
                }) 
                getExpenses()   
    }
    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }
    const deleteExpense = async(id) =>{
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }
    const totalExpenses =()=>{
        let totalIncome =0;
        expenses.forEach((income)=>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome ;
    }
    const tolalBalance =()=>{
        return tolalBalance() - totalExpenses()
    }
  
    return(
        <GlobalContext.Provider value ={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses, 
            totalIncome,
            addExpense, 
            getExpenses,
            deleteExpense,
            totalExpenses, 
            tolalBalance
        }} >
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}