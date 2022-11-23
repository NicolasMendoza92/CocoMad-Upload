import React from 'react';
import { Card, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminBoard() {
    return (
        <>
            <h2 className="title-style text-center my-2">Panel de Administrador</h2>
            <Container className='d-flex flex-wrap justify-content-around'>
                <Card className='m-2' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Productos</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Carga, modifica y elimina tus productos</Card.Subtitle>
                        <Link as={NavLink} to="/productList">Ver</Link>
                    </Card.Body>
                </Card>
                <Card className='m-2' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Usuarios</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Revisa los usuarios que se inscribieron</Card.Subtitle>
                        <Link as={NavLink} to="/userList">Ver</Link>
                    </Card.Body>
                </Card>
                <Card className='m-2' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Mensajes</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Mira los mensajes que dejaron los clientes</Card.Subtitle>
                        <Link as={NavLink} to="/messageList">Ver</Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}