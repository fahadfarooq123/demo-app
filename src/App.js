import React from "react";
import Home from "./Home";
import {Route, Routes } from "react-router-dom"

function myFunction()
{
    return (
        <>
        <Routes>
          <Route path={"/"} Component={Home}/>
          <Route path={"/about"} Component={about}/>
        </Routes>
        
        </>
    )
}

export default myFunction;