import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Tasks from "./views/Task";

const Routers = () => {
    return(
        <Routes>
            <Route element = { <Home/> }  path="/" exact />
            <Route element = { <Tasks/> }  path="/tasks" />
        </Routes>
    )
}

export default Routers;