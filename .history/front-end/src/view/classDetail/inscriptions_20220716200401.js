import { Table } from "react-bootstrap";

export function Inscriptions({inscriptions}){
    return(
        <>
        <h2>Quem já amrcou presença?</h2>
        <Table striped responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            {inscriptions.map(inscription => (
                <tr key={inscription.id}>
                    <td>{inscription.id}</td>
                    <td>{inscription.name}</td>
                </tr>
            ))}
            
            
        </tbody>
        </Table>
        </>
    )
}