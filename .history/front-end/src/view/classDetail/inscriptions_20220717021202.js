import { Alert, Table } from "react-bootstrap";

export function Inscriptions({inscriptions}){
    return(
        <>
        <h2>Quem já marcou presença?</h2>
        {inscriptions.length > 0? (
        <Table striped responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            {inscriptions.map((inscription, index) => (
                <tr key={inscription.id}>
                    <td>{index + 1}</td>
                    <td>{inscription.name}</td>
                </tr>
            ))}
            
            
        </tbody>
        </Table>
        ) : (
            <Alert variant="info">Seja o primeiro a confirmar sua participação!</Alert>
        )}
        </>
    )
}