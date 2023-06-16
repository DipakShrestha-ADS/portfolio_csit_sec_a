import React from "react";
import './service_style.css'
import ServiceCard from "../myComponents/service_card";

function ServicePage(props){
    return(
        <>
            <div className="service-page">
                <h5>Services</h5>
                <h2>Check My Services</h2>
                <div>
                    <ServiceCard
                    title="Landing Page"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt="Landing image"
                    />
                </div>
            </div>
        </>
    )
}
export default ServicePage