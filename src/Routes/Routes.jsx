import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {Home} from './Home'
import {Pricing} from './Pricing'
import {Login} from './Login'
import {Signup} from './Signup'
import { v4 as uuidv4 } from 'uuid'


function Routes() {
    return (
        <>
            <div> 
                <Route path="/" render={() => <NavBar key = {uuidv4()}/>} />
                <Route path="/" exact render={() => <Home key = {uuidv4()} />} />
                <Route path="/pricing" render={() => <Pricing key = {uuidv4()} />} />
                <Route path="/login" render={() => <Login key = {uuidv4()} />} />
                <Route path="/signup" render={() => <Signup key = {uuidv4()} />} />
            </div>
        </>
    )
}

export { Routes };