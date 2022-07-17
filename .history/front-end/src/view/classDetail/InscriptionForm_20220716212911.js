import { useState } from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

export function InscriptionForm () {
    const [nameField, setnameField] = useState("")
    return(
        <>
        <h2>Inscreva-se</h2>
        <Form>
            <FormGroup>
                <FormLabel>Nome</FormLabel>
                <FormControl placeholder="Informe seu nome"
                value={nameField}
                onChange={(event) => setnameField(event.target.value)} />
            </FormGroup>
        </Form>
        
        </>
    )
}