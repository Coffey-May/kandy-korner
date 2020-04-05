import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Products.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <div className="products">
            {
                products.map(pro => <Product key={pro.id} product={pro}
                    productType={productTypes.find(PT => PT.id === pro.productTypeId)} />)
            }
        </div>
    )
}