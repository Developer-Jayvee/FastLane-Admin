'use client'
import Table from "@/components/features/Table"
import {
    CUSTOMER_HEADERS
} from '@/constants/index'
import ActionButtons from "./ActionButtons";
import { useState } from "react";
 

export default function HomeTable(){
    const localList = localStorage.getItem('customers');
    const [ customerList , setCustomerList ] = useState(JSON.parse(localList))
    
    console.log(customerList);
    
    return (
        <>
         <Table headers={CUSTOMER_HEADERS} >
                            <tr>
                                <td>Jayvee Hidlao</td>
                                <td>Antipolo City,Rizal</td>
                                <td>Pending</td>
                                <td>
                                    <div className="btn-group">
                                        <ActionButtons/>
                                    </div>
                                </td>
                            </tr>
                        </Table>
        </>
    )
}