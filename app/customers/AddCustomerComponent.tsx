'use client'

import ButtonComponent from "@/components/ui/ButtonComponent"
import Modal from "@/components/layout/Modal/Modal"
import { useEffect, useState } from "react"
import { Switch, FormGroup, FormControlLabel, Button } from "@mui/material";
import {
    CUSTOMER_DATA_FORMAT
} from "@/constants/index"
import { log } from "console";
export default function AddCustomerComponent() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [ isActive , setActive ]  = useState(false);
    const handleAdd = () => setModalOpen(true);
    const [ formData , setFormData ] = useState({...CUSTOMER_DATA_FORMAT});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name , value , role   } = e.target;
        if(role === 'switch'){
            setActive(!isActive)
        }
        setFormData(
            prev => (
                {
                    ...prev,
                    [name]: role === 'switch' ? !isActive  : value
                }
            )
        )
    }
    const handleSubmit = () => {
        if(localStorage.getItem('customers')){
           localStorage.setItem('customers',JSON.stringify(formData));
            return;
        }
        localStorage.setItem('customers',JSON.stringify(CUSTOMER_DATA_FORMAT))
    }
    return (
        <>
            <ButtonComponent btnText="Add" handleClick={handleAdd} />
            <Modal openModal={isModalOpen} setOpenModal={setModalOpen}>
                     <div className="wrapper--group">
                    <label htmlFor="name">Customer</label>
                    <input type="text" onChange={handleChange} name="name"  />
                </div>
                <div className="wrapper--group">
                    <label htmlFor="name">Address</label>
                    <textarea rows={5} onChange={handleChange} name="address">

                    </textarea>
                </div>
                <div className="input--group">
                    <label htmlFor="">Status</label>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={isActive} onChange={handleChange} name="status"/>} label="Active" />
                    </FormGroup>
                </div>
                <div className="wrapper--group">
                    <Button variant="contained" onClick={handleSubmit} color="success">
                        Success
                    </Button>
                </div>
            </Modal>

        </>
    )
}