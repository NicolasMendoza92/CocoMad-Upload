import React from 'react'
import swal from 'sweetalert'
import axios from 'axios';
import { Card, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { guardarEnLocalStorage } from '../../utils/localStorage';

export const FormLogin = ({ requestUserData, cart }) => {

    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({ email: '', password: '' });
    const history = useHistory();


    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.email.length < 35
            && newInput.password.length < 30) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const response = await axios.post('https://cocobackend.herokuapp.com/api/auth/login', input);
            const { token } = response.data;
            guardarEnLocalStorage({ key: 'token', value: { token } });

            await requestUserData();
            history.push('/adminBoard');

        }
        catch (error) {
            console.error(error);
            if (input.email === '' && input.password === '') {
                swal("Faltan datos", "Completar los campos obligatorios", "warning")
            }
            else if (input.email === '') {
                swal('completa el email')
            }
            else if (input.password === '') {
                swal('completa la contraseña')
            }
            else if (error.response.data) {
                swal(JSON.stringify(error.response.data))
            } else {

                alert('Error de conexion');
            }
        }
        setValidated(true);
        if (setValidated === true) {
            event.target.reset();
        }

    };

    return (
        <Card className="form-login">
            <Card.Body className="card-login-form">
                <div className="d-flex flex-column align-items-center">
                    <h3><b>Bienvenido a CocoMad</b> </h3>
                </div>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="text-center">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> <b>Email</b></Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Ingresa el correo"
                            onChange={(e) => handleChange(e)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label> <b>Contraseña</b></Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => handleChange(e)}
                            required />
                    </Form.Group>
                    <button type="submit" className="responsive-login-btn">Iniciar Sesion</button>
                </Form>
            </Card.Body>
        </Card >
    )
}


