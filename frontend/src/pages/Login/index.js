import React, {useState} from 'react';
import './styles.css';

import api from '../../services/api';

//Rotas -- Para não ter que recarregar a pag, e sim só trocar a rota
import { Link, useHistory } from 'react-router-dom';
import { FiLogin } from 'react-router-dom';

import {FiArrowRight} from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from  '../../assets/logo.svg';
import loginImg from '../../assets/login.svg';

// npm install react-router-dom --> Para criar uma rota (register...)

export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('/login', {id});

            //console.log(response.data.name); //se deu tudo certo vai ter a resposta com o nome da ong
          localStorage.setItem('ongId', id); //localStorage -> Salva em todo o servidor
          localStorage.setItem('ongName', response.data.name);
          
          history.push('/profile'); //Leva para a rota profile
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input 
                    placeholder="Insira seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    
                    <button type="submit">
                        <FiArrowRight size={40}/>
                    </button>

                    

                    <Link className="button-link" to="/register">Registrar-se</Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

