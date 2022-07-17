import { useState } from "react"
import { Alert, Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

export function InscriptionForm ({turmaId}) {
    const [showSucess, setShowSucess] = useState(false)
    const [formData, setFormData] = useState({
        userName: "",
        userMat: "",
        userEmail:""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
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
            setShowSucess(true)
        } catch (error) {
            console.eroor(error)
        }
    }
    return(
        <>
        <h2>Inscreva-se</h2>
        {setShowSucess && (
            <Alert variant="success" dismissible onClose={() => setShowSucess(false)}>Inscrito com sucesso!</Alert>
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
            <Button type="submit" className="btn-banner">Inscrever-se</Button>
        </Form>
        
        </>
    )
}