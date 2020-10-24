import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';

const CrudEventos = () => {
    const[ id, setId] = useState(0);
    const[ nome, setNome] = useState('');
    const [ link, setLink] = useState('');
    const [ urlImagem, setUrlImagem] = useState('');
    const [ descricao, setDescricao] = useState('');
    const [ categoriaId, setCategoriaId] = useState('');
    const [ categorias, setCategorias] = useState('');
    const [ eventos, setEventos] = useState('');

    return(
        <div>
            <Menu />
                <h1>CrudEventos</h1>
            <Rodape />
        </div>
)
}

export default CrudEventos;