import React from "react"
import ReactDOM from 'react-dom/client'
import ItemPlacing from "./renderProduct";
// import Productitem  from "./classproduct";
import "./app.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ItemPlacing />
    </React.StrictMode>
)
/*
import React from "react"
import ReactDOM from "react-dom/client"
import Product from "./product.js"
const root = ReactDOM.createRoot(document.getelementById("root"));
root.render(<Product />)

*/