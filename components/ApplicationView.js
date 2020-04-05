import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./product/ProductTypeProvider"
import EmployeeList from "./employee/EmployeeList"
import EmployeeProvider from "./employee/EmployeeProvider"
import EmployeeForm from "./employee/EmployeeForm"

export default (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } >
                    </Route>
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } >
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}