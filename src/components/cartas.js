import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cartas = () =>{

    const initialState = {
        'id': '',
        'nombre': '',
        'direccion': '',
        'telefono': ''
    }
    const [datos, setDatos] = useState(initialState)

    const handleSubmit = event =>{
        alert('Voce quiere tener um miembro mas grande? Haga clicke aqui')
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} className="carta">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>  
            </Row>

            <Row className="form-wrapper">
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Ingresa tu nombre: </Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu nombre" name="nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label>Ingresa tu dirección: </Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu direccion" name="direccion"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Ingresa tu telefono: </Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu telefono" name="telefono"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Cartas