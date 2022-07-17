import { useState } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

export function InscriptionForm ({turmaId}) {
    const [formData, setFormData] = useState({
        userName: "",
        userMat: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            fetch(`${process.env.REACO_APP_API_URL}/inscription`, 
            {
                method: "Post",
                body: JSON.stringify({
                    name: formData.userName,
                    matricula: formData.userMat,
                    turmaId 
                }),
                headers:{
                    "content-type": "application/json"
                }
            }
            )
        } catch (error) {
            
        }
    }
    return(
        <>
        <h2>Inscreva-se</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="inscription-name" className="mb-3">
                <FormLabel className="m-0" >Nome</FormLabel>
                <FormControl placeholder="Informe seu nome"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
                />
            </FormGroup>
            <FormGroup controlId="inscription-matricula" className="mb-3">
                <FormLabel className="m-0">Matrícula</FormLabel>
                <FormControl placeholder="Informe sua matrícula"
                value={formData.userMat}
                onChange={handleChange}
                name="userMat"
                 />
            </FormGroup>
            <Button type="submit" className="btn-banner">Inscrever-se</Button>
        </Form>
        
        </>
    )
}