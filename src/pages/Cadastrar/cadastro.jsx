import React, {useState} from "react";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";
import styles from './styles.css';

// const initialValue = {
//     title: '',
//     image: '',
//     price: 0,
//     url: '',
// };


function Cadastrar (){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();
    
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do formulário (o recarregar a página)

        const url = '/movies';

    api.post(url, values).then( () => {
        navigate('/');
    })
};

    function onChange(ev){
        const {name, value} = ev.target
        console.log({name, value});

        setValues({... values,[name]:value})
    }

    return(
        <>
        <h1>Cadastrar</h1>
        <form onSubmit={onSubmit}>
            <div className={styles.movieForm}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" name="title" onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="url">Url do Livro</label>
                <input type="text" id="url" name="url" onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="image">Url/Imagem</label>
                <input type="text" id="image" name="image" onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="price">Preço</label>
                <input type="text" id="price" name="price" onChange={onChange} />
            </div>
            <button type="submit">Salvar</button>
        </form>
        </>
    )
}

export default Cadastrar;