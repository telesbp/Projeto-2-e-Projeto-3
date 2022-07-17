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
                <tr>
                    <td>{inscription.id}</td>
                    <td>{inscription.name}</td>
                </tr>
            ))}
            <tr>
                <td>1</td>
                <td>Rafael</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Rafael</td>
            </tr>
            
        </tbody>
        </Table>
        </>
    )
}