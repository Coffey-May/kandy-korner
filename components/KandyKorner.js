import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationView from "./ApplicationView"
import "./KandyKorner.css"
import Login from "./auth/Login"
import { Route, Redirect } from "react-router-dom"
import Register from "./auth/Register"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kandy_customer")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationView {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)