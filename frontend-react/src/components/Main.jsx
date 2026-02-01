import React from 'react'
import Buttons from "./Buttons"
const Main = () => {
  return (
    <>
    <div className='container '>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>The Stock Prediction Portal is a web-based application that helps users analyze and predict stock market trends using machine learning. It collects historical stock data and processes it to identify patterns and price movements. Based on this data, the system provides future price predictions and visual insights through charts and graphs. The portal is designed to be user-friendly, allowing users to easily select stocks and view predictions. This project demonstrates how machine learning can support better decision-making by turning complex financial data into meaningful and understandable insights.</p>
            < Buttons class='btn-outline-info' text='Login'/>
        </div>
    </div>
    
    </>
  )
}

export default Main