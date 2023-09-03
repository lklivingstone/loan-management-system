import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { FormCard } from "../../components/form-card/FormCard"
import { BusinessDetails } from "../../components/businessDetails/BusinessDetails";
import { Button } from "../../components/button/Button";
import { AccountingProvider } from "../../components/accountingProvider/AccountingProvider";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Home.css";
import { Result } from "../../components/result/Result";
import { applicationSubmission, balanceSheetRequest } from "../../api/RequestMethods";
import { BalanceSheet } from "../../components/balanceSheet/BalanceSheet";
import Navbar from "../../components/navbar/Navbar";


const Home = () => {
    const user = useSelector((state)=>state.user_details.user)
    const token = useSelector((state)=>state.user_details.token)

    const [ name, setName ] = useState("");
    const [ contact, setContact ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ year, setYear ] = useState();
    const [ amount, setAmount ] = useState();
    const [ step, setStep ] = useState(1);
    const [ provider, setProvider ] = useState("");
    const [ sheet, setSheet ] = useState([]);
    const [ approvedAmount, setApprovedAmount ] = useState([]);
    const [ error, setError ] = useState("");

    const prevStep = () => {
        if (step == 3) {
            setName("")
            setContact("")
            setAddress("")
            setYear()
            setAmount()
            setProvider("")
            setStep(1)
        }
        else if (step == 4) {
            setName("")
            setContact("")
            setAddress("")
            setYear()
            setAmount()
            setProvider("")
            setStep(1)
        }
        else {
            setStep(step - 1)
        }
    }

    const nextStep = () => {
        if (step === 1) {
            if (name && contact && address && !isNaN(year) && !isNaN(amount)) {
                setError("");
                setStep(step + 1)
            }
            else if (isNaN(year) || isNaN(amount)) {
                setError("Fill all the details Correctly")
            }
            else {
                setError("Fill all the details ")
            }
        }
        else if (step === 2) {
            if (provider) {
                setError("");
                setStep(step + 1)
            }
            else {
                setError("Select a Provider")
            }
        }
        else {
            setStep(step+1)
        }
    }

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleContactChange = (e) => {
        e.preventDefault();
        setContact(e.target.value);
    }

    const handleAddressChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    }

    const handleYearChange = (e) => {
        e.preventDefault();
        setYear(e.target.value);
    }
    
    const handleAmountChange = (e) => {
        e.preventDefault();
        setAmount(e.target.value);
    }

    const handleProviderChange = (e) => {
        e.preventDefault();
        setProvider(e.target.value);
    }

    const handleBalanceSheetRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await balanceSheetRequest(token);
            setSheet(response.data.data);
            nextStep();
        }
        catch (err) {
            alert("Error!")
        }
    }

    const handleSubmission = async (e) => {
        e.preventDefault();

        try {
            const details = {
                name : name,
                contact : contact,
                address : address,
                year : year,
                loanAmount : amount
            }
            const response = await applicationSubmission({sheet, details, token});
            
            setApprovedAmount(response.data.data);
            nextStep();
        }
        catch (err) {
            alert("Error!")
        }
    }

    return (
        <>
        <Navbar />
        <FormCard>
            {
                step === 1 ? 
                <>
                    <h2>BUSINESS DETAILS</h2>
                    <BusinessDetails 
                        handleNameChange = {handleNameChange}
                        handleContactChange = {handleContactChange}
                        handleAddressChange = {handleAddressChange}
                        handleYearChange = {handleYearChange}
                        handleAmountChange = {handleAmountChange} 
                        name = {name}
                        contact = {contact}
                        address = {address}
                        year = {year}
                        amount = {amount}
                        provider = {provider}
                    >
                    </BusinessDetails> 
                    <div className="button-container">
                        <Button
                            label="Next"
                            onClick={nextStep}
                        />
                        {
                            error && 
                            <p className="error">{error}</p>
                        }
                    </div>
                </>
                : null
            }
            {
                step === 2 ? 
                <>
                    <ArrowBackIcon 
                        className = "back-button"
                        onClick={prevStep}
                    />
                    <h2>Accounting Provider</h2>
                    <AccountingProvider 
                        handleProviderChange={handleProviderChange}
                    /> 
                    <div className="button-container">
                        <Button
                            label="Request Balance Sheet"
                            onClick={handleBalanceSheetRequest}
                        />
                        {
                            error && 
                            <p className="error">{error}</p>
                        }
                    </div>
                </>
                : null
            }
            {
                step === 3 ? 
                <>
                    <ArrowBackIcon 
                        className = "back-button"
                        onClick={prevStep}
                    />
                    <h2>Balance Sheet:</h2>
                    <BalanceSheet 
                        sheet={sheet}
                    />
                    <div className="button-container">
                        <Button
                            label="Submit Application"
                            onClick={handleSubmission}
                        />
                    </div>
                </>
                : null
            }
            {
                step === 4 ? 
                <>
                    <ArrowBackIcon 
                        className = "back-button"
                        onClick={prevStep}
                    />
                    <Result
                        approvedAmount = {approvedAmount}
                    >
                        
                    </Result>
                </>
                : null
            }
        </FormCard>
        </>
    )
}

export default Home