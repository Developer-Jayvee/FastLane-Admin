import React from "react";

type TableDetails  = {
    id: number;
    customer: string;
    data: string;
    amount: number;
    status: string;
}
type TableProps = {
    customClass?: string;
    headers: string[];
    tableData?: TableDetails[];
    children?: React.ReactNode;
}
export default function Table({ customClass = " border-collapse" , headers , children }: TableProps){

    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {
                        headers.map( (data, index) =>
                            <th key={index}>{data}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}