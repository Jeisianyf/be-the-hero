import React, {useState} from 'react'; //useState --> amazernar cada input em um estado
import api from '../../services/api.js'; //integração do back com front
import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import {FiCornerDownLeft} from 'react-icons/fi' //npm install react-icons
import logoImg from  '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState(''); //name -> valor -- setName -> atualiza esse valor //por ser input de text, o valor vai começar vazio
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) { //função responsável por fazer o cadastro do user
        e.preventDefault(); //previni comportamento padrão

        const data = { //Aparecer oque estará sendo registrado
            name,
            email,
            whatsapp,
            city,
            uf,
        };

       try {
            const response = await api.post('/ongs', data); //'ongs' é a rota do back onde cria ongs, dados q qro enviar é o 'data' // o const response é para retornar uma resposta ao ser cadastrado
    
            alert(`Seu ID de acesso: ${response.data.id}`); //` -- pq estou colocando uma variavel no texto
       
            history.push('/'); //enviar o usuário para essa pag
        }   catch (err) {
            alert('Erro no cadastro, tente novamente');
       } 
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be the hero'/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e deixe com que as pessoas sejam heróis para sua ONG</p>

                    <Link className="button-link" to="/"> 
                        <FiCornerDownLeft size={16} color="#41414d"/>
                        Voltar para página de Login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" placeholder="E-mail da ONG"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="UF" style={{ width:80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        /> 
                    </div>

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}