"use client"
import ButtonComponent from "@/components/ui/ButtonComponent"
import Modal from "@/components/layout/Modal/Modal"
import { useState } from "react"
import { Switch, FormGroup, FormControlLabel, Button } from "@mui/material";

import { useRouter } from "next/navigation";
export default function ActionButtons() {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModal = () => setModalOpen(true)
    const router = useRouter();
    const navNextPage = () => {
        router.push("/customers/1");
    }
    return (
        <>
            <ButtonComponent isIcon={true} handleClick={handleModal} iconName="editpencil"></ButtonComponent>
            <ButtonComponent isIcon={true} iconName="delete" handleClick={navNextPage}></ButtonComponent>
            <Modal openModal={isModalOpen} setOpenModal={setModalOpen}>
                <div className="wrapper--group">
                    <label htmlFor="name">Customer</label>
                    <input type="text" />
                </div>
                <div className="wrapper--group">
                    <label htmlFor="name">Address</label>
                    <textarea rows={5}>

                    </textarea>
                </div>
                <div className="input--group">
                    <label htmlFor="">Status</label>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Active" />
                    </FormGroup>
                </div>
                <div className="wrapper--group">
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                </div>
            </Modal>
        </>
    )
}