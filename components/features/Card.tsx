import React from "react";

type CardProps = {
    customClass? : string;
    children?: React.ReactNode;
}

export default function Card({ customClass  , children} : CardProps){
    return (
        <div className={customClass}>
         { children }
        </div>
    )
}