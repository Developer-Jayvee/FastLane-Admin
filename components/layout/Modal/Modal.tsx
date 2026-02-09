'use client'
import styles from "@/components/layout/Modal/modal.module.css";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
    isClose?: boolean;
    openModal?: boolean;
    setOpenModal: (isOpen: boolean) => void;
    children: React.ReactNode;
}
const Modal = ({ isClose = true, openModal = false, setOpenModal , children }: ModalProps): React.ReactNode => {

    const [isHidden, setHidden] = useState(isClose);
    const handleClose = () => setOpenModal(false);

    useEffect(() => {
        setHidden(
            openModal ? false : true
        )
    }, [openModal])
    return (
        <div hidden={isHidden} >
            <div className={styles.modal}>
                <p className={styles.closeBtn} onClick={handleClose}>&#9747;</p>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            <div className={styles.blackBg}></div>
        </div>
    )
}

export default Modal;