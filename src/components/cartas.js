import { useEffect, useRef, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {v4 as uuid} from 'uuid'

const Cartas = () =>{

    const initialState = {
        'id': '',
        'nombre': '',
        'direccion': '',
        'telefono': ''
    }

    // useEffect(() =>{
    //     btnActual.current.className = "display-none"
    // }, [])

    // const btnActual = useRef(null)

    const [datos, setDatos] = useState(initialState)
    const {nombre, direccion, telefono, id} = datos
    const [informacion, setInformacion] = useState([])
    //Variable de estado para que aparezca el botón de actualizar
    const[isActive, setIsActive] = useState(false)

    const handleSubmit = event =>{
        event.preventDefault()
        const initialState2 = {
            'id': uuid(),
            'nombre': datos.nombre,
            'direccion': datos.direccion,
            'telefono': datos.telefono
        }
        let inf = informacion
        inf.push(initialState2)
        setInformacion(inf)
        setDatos(initialState)
        console.log(informacion)
    }
    const handleChange = e =>{
        setDatos({
            ...datos, [e.target.name]:e.target.value 
        })
        // console.log(datos)
    }
    const handleModificar = e =>{
        const id = e.target.name.slice(1)
        //Toggle para que aparezca el botón de modificar
        setIsActive(true)

        for(const info of informacion){
            if(info.id === id) setDatos(info) 
        }
    }

    const handleActualizar = e =>{
        const id = datos.id
        let inf = informacion
        const index = inf.findIndex(i => i.id == id)
        const modifiedState = {
            'id': datos.id,
            'nombre': datos.nombre,
            'direccion': datos.direccion,
            'telefono': datos.telefono
        }
        inf[index] = modifiedState
        setInformacion(inf)
        setDatos(initialState)
        setIsActive(false)
    }

    const handleEliminar = e =>{
        const id = e.target.name.slice(1)
        let inf = []
        for(const info of informacion){
            if(info.id !== id) inf.push(info)
        }
        setInformacion(inf)
        setIsActive(false)
    }

    return (
        <Container>
            <Row className="row-cols-3 justify-content-center">
                {
                    informacion.map(inf => (
                        <Col key={inf.id} className="mt-5">
                            <Card style={{ width: '18rem', marginInline: 'auto' }} className='carta'>
                                <Card.Body>
                                    <Card.Title>{inf.nombre}</Card.Title>
                                    <Card.Text>ID: {inf.id}</Card.Text>
                                    <Card.Text>Dirección: {inf.direccion}</Card.Text>
                                    <Card.Text>Teléfono: {inf.telefono}</Card.Text>
                                    <Button name={'m' + inf.id} variant="info" className="me-2" onClick={handleModificar}>Modificar</Button>
                                    <Button name={'e' + inf.id} variant="danger" className="ms-2" onClick={handleEliminar}>Eliminar</Button>
                                </Card.Body>
                            </Card>
                        </Col> ))
                }
            </Row>

            <Row className="form-wrapper mt-5">
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Ingresa tu nombre: </Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" value={nombre} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label>Ingresa tu dirección: </Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu direccion" name="direccion" value={direccion} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Ingresa tu telefono: </Form.Label>
                        <Form.Control type="tel" placeholder="Ingresa tu telefono" name="telefono" value={telefono} onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" name="btnAgregar" className={isActive ? 'btnAgregar inactivo-agregar' : 'btnAgregar'} >Agregar</Button>
                    <Button variant="info" name={id} className={isActive ? 'btnModificar activo-modificar' : 'btnModificar'} onClick={handleActualizar}>Actualizar</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Cartas