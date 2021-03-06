import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Form, Container, Button} from 'react-bootstrap';
import './index.css';

const Cadastrar = () => {
    return(
        <div>
            <Menu/>
            <Container className='form-height'>
            <Form className='form-signin'>
            <div className='text-center'>
                <img src></img>
                </div>
                <br/>
                <small>Informe os dados abaixo</small>
                <hr/>
             <Form.Group controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Informe seu nome completo" />
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Informe o email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="senha" placeholder="Informe sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
            <br/><br/>
            <a href='/login' style={{marginTop:'30px'}}>Já tenho conta</a>
            </Form>
            </Container>
            <Rodape/>
        </div>
    )
}
export default Cadastrar;