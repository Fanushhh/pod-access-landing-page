import { useState } from "react";
import styled from "styled-components";
import { variables } from "../../styles/variables";
import { ValidateEmail } from "../../utils/utils";
const StyledForm = styled.form`
    position: relative;
    z-index: 3;
    width: 100%;
    margin-top: 3rem;
    max-width: 427px;
    & input {
        width: 100%;
        
    }
    & input[type='text']{
        background-color: ${variables.lightGray};
        border: none;
        padding: .7rem 1.5rem;
        border-radius: 28px;
        margin-bottom: 1rem;
        color:white;
    }
    & input::placeholder{
        color:${variables.white};
        opacity: .5;
    }
    & input:focus{
        border: none;
        outline: none;
    }

    & input[type='submit'] { 
        color: black;
        background-color: ${variables.lightGreen};
        text-align: center;
        border: none;
        font-weight: 700;
        padding: .7rem 0;
        border-radius: 28px;
    }

    & input[type='submit']:hover{
        background-color: #B3FFE2;
        cursor: pointer;
    }
    p{
        color:red;
        font-size: 0.7rem;
        text-align: left;
        margin-bottom: .5rem;
        margin-left: 1rem;
    }

    @media screen and (min-width: 700px) {

        & input[type='text']{
            padding: .9rem 2rem;
        }
        & input[type='submit'] {
            max-width: 162px;
            position: absolute;
            top:5px;
            right: 5px;
            padding: .6rem 1.5rem;
            font-size: .8rem;
        }
    }
`;

export default function Form({props}){
    const [invalid, setInvalid] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(ValidateEmail(e.target.email.value)){
            setInvalid(false)
        }else{
            setInvalid(true);
        }
    }
    
    return(
        <StyledForm onSubmit={handleSubmit}>
            <label>
                <input type='text' name='email' placeholder={props.emailAddress} />
            </label>
            {invalid ? <p>Oops! Please check your email</p> : ''}
            <input type='submit' value={props.requestBtn} />
        </StyledForm>
    )
}