import { useState } from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

export function InscriptionForm () {
    const [nameField, setnameField] = useState("")
    const [matriculaField, setMatriculaField] = useState("")
    return(
        <>
        <h2>Inscreva-se</h2>
        <Form>
            <FormGroup controlId="inscription-name">
                <FormLabel>Nome</FormLabel>
                <FormControl placeholder="Informe seu nome"
                value={nameField}
                onChange={(event) => setnameField(event.target.value)} />
            </FormGroup>
            <FormGroup controlId="inscription-matricula">
                <FormLabel>Mat'ricula</FormLabel>
                <FormControl placeholder="Informe sua matrícula"
                value={matriculaField}
                onChange={(event) => setMatriculaField(event.target.value)} />
            </FormGroup>
        </Form>
        
        </>
    )
}