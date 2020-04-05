import React from "react"
import "./Locations.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <div className="location__footage">{location.squareFootage} sqft.</div>
        <div className="location__handicap">{location.handicapAccessible ? "Accessible" : "Inaccessible"}</div>
    </section>
)