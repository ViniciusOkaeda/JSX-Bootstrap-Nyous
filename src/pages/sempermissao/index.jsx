import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container } from 'react-bootstrap';

const SemPermissao = () => {


    return(
        <div>
            <Menu />
            <Container>
                <h1>Sem Permissao para acessar essa página.</h1>
            </Container>
            <Rodape />
        </div>
)
}

export default SemPermissao;