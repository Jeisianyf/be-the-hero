import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import {FiCornerDownLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function NewCases() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    // Registrando novos casos
    async function handleNewCases(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

          history.push('/profile'); // Leva de volta ao terminar cadastro
        } catch (err) {
            alert('Error ao tentar registrar novo caso, tente novamente');
        }
    }
    

    return (
        <div className="newcases-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be the hero'/>

                    <h1>Enviar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói</p>

                    <Link className="button-link" to="/profile"> 
                        <FiCornerDownLeft size={16} color="#41414d"/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewCases}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input className="valor" 
                        placeholder="Valor em R$"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}