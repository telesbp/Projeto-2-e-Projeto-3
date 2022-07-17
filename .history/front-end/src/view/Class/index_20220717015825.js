import { useEffect, useState } from "react"
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap"
import { CardClasses } from "../../components/CardClasses"
import { Layout } from "../../components/Layout"
import { Loading } from "../../components/Loading"
import { getTurmas } from "../../services/Turmas.service"


export function ClassesView() {
   const [turmas, setTurmas] = useState([])
   const [loading, setLoading] = useState(true)
   const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
       const fetchTurmas = async () => {
        try {
            const data = await getTurmas()
            setTurmas(data)
        } catch  {
            setErrorMsg("Falha ao buscar as turmas. Recarregue a página ou tente mais tarde.")
                }
            setLoading(false)
    }        
     fetchTurmas()   
    }, [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Classes</h1>
                {  loading && <Loading/>}
                {errorMsg && (
                    <Alert variant="danger">{errorMsg}</Alert>
                )}
                <Row>
                {turmas.map((turma)=> {
                    return (
                        <Col key={turma.id} className="mb-4" xs={6} md={4} lg={3}>
                            <CardClasses propTurma={turma} />
                        </Col>
                    )
                })}
                </Row>                
            </Container>
        </Layout>
    )
    
}