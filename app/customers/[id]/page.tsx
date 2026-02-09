'use client'
import { useParams } from "next/navigation";
export default function CustomerDetails(){

    const params = useParams();
    const { id } = params;

    return (
        <>
            <h1>{id}</h1>
        </>
    )
}