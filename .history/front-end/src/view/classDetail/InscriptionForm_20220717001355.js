import { useState } from "react"
import { Alert, Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const initialForm = {
    userName: "",
    userMat: "",
    userEmail:""
}

export function InscriptionForm ({turmaId}) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [showError, setShowError] = useState(false)
    const [formData, setFormData] = useState(initialForm)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setShowError(undefined)
            setIsSubmiting(true)
           await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, 
            {
                method: "POST",
                body: JSON.stringify({
                    name: formData.userName,
                    matricula: formData.userMat,
                    email: formData.userEmail,
                    turmaId: parseInt(turmaId) 
                }),
                headers:{
                    "content-type": "application/json"
                }
            }
            )
            setShowSuccess(true)
            setFormData(initialForm)
        } catch (error) {
            console.eroor(error)
            setShowError("Falha ao fazer a inscrição. Tento novamente.")
        }
        isSubmiting(false)
    }
    return(
        <>
        <h2>Inscreva-se</h2>
        {showSuccess && (
            <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Inscrito com sucesso!</Alert>
        )}
        {showError && (
            <Alert variant="danger" dismissible onClose={() => setShowSuccess(false)}>{showError}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="inscription-name" className="mb-3">
                <FormLabel className="m-0" >Nome</FormLabel>
                <FormControl placeholder="Informe seu nome"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
                required                
                />
            </FormGroup>
            <FormGroup controlId="inscription-matricula" className="mb-3">
                <FormLabel className="m-0">E-mail</FormLabel>
                <FormControl placeholder="Informe seu E-mail"
                value={formData.userEmail}
                onChange={handleChange}
                name="userEmail"
                required
                type="email"
                 />
            </FormGroup>
            <FormGroup controlId="inscription-matricula" className="mb-3">
                <FormLabel className="m-0">Matrícula</FormLabel>
                <FormControl placeholder="Informe sua matrícula"
                value={formData.userMat}
                onChange={handleChange}
                name="userMat"
                required
                 />
            </FormGroup>
            <Button type="submit" className="btn-banner" disabled={isSubmiting}>Inscrever-se</Button>
        </Form>
        
        </>
    )
}