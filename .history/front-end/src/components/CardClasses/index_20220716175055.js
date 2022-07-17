import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CardClasses ({propTurma}) {
    return(
    <Card className="text-center shadow h-100">
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title as="h2" className="h5" >{propTurma.name}</Card.Title>
            <Card.Text>{propTurma.shortDescription}</Card.Text>
            <Button className="btn-banner mt-auto" as={Link} to={`/turmas/${propTurma.id}`}  >Saber mais</Button>
        </Card.Body>
    </Card>
)
}