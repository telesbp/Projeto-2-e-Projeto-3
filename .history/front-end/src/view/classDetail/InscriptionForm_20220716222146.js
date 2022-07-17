import { useState } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

export function InscriptionForm () {
    const [formData, setFormData] = useState({
        userName: "",
        userMat: ""
    })
    return(
        <>
        <h2>Inscreva-se</h2>
        <Form>
            <FormGroup controlId="inscription-name" className="mb-3">
                <FormLabel className="m-0" >Nome</FormLabel>
                <FormControl placeholder="Informe seu nome"
                value={formData.userName}
                onChange={(event) => setFormData({
                    ...formData,
                    userName: event.target.value
                })} />
            </FormGroup>
            <FormGroup controlId="inscription-matricula" className="mb-3">
                <FormLabel className="m-0">Matrícula</FormLabel>
                <FormControl placeholder="Informe sua matrícula"
                value={formData.userMat}
                onChange={(event) => setFormData({
                    ...formData,
                    userMat: event.target.value
                })} />
            </FormGroup>
            <Button type="submit" className="btn-banner">Inscrever-se</Button>
        </Form>
        
        </>
    )
}