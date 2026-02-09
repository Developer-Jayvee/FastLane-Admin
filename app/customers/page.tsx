import Table from "@/components/features/Table";
import Modal from "@/components/layout/Modal/Modal";
import Button from "@/components/ui/ButtonComponent";
import { CUSTOMER_HEADERS } from "@/constants";
import ActionButtons from "./ActionButtons";

const customer = () => {
    return (
        <>
            <div className="wrapper">
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
                
            </div>
        </>
    )
}

export default customer;
