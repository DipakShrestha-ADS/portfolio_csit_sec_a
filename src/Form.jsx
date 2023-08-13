import InputComponent from "./InputComponent";
import "./Form.css";
import PropTypes from 'prop-types'
import { useState } from "react";

export default function Form() {
    const [fullname, setFullName] = useState("")
    const [dob, setDob] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("fullnmae: ", fullname, " dob: ", dob)
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <header>
                        <h1>Registration</h1>
                    </header>
                    <DetailComponent className="personal-details" title="Personal Details" />
                    <DetailComponent className="identity-details" title="Identity Details" />
                    <Button />
                </form>
            </div>
        </div>
    );
}

function Button() {
    return (
        <div className="btn">
            <button type="submit">Next</button>
        </div>
    );
}

function DetailComponent({ title, className, fullname, dob, onChangeFullname, onchangeDob }) {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <div className="firstRow">
                <InputComponent  name="Full name" type="text" placeHolder="Enter your name" />
                <InputComponent name="Date of birth" type="number" placeHolder="Enter birth date" />
                <InputComponent  name="Email" type="email" placeHolder="Enter your email" />
            </div>
            <div className="secondRow">
                <InputComponent name="Mobile number" type="number" placeHolder="Enter mobile number" />
                <InputComponent name="Gender" type="text" placeHolder="Enter your gender" />
                <InputComponent name="Occupation" type="text" placeHolder="Enter your occupation" />
            </div>
        </div>
    );
}

DetailComponent.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
}