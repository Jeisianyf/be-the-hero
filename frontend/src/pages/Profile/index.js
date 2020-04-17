import React, {useState, useEffect} from 'react'; //useState -> usa o estado do componente para gravar as informações dentro dele //useEffect -> Serve para disparar alguma função em algum determinado momento do componente, tipo quando é mostrado em tela
import {Link, useHistory} from 'react-router-dom';
import './styles.css'

import {FiTrash2} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api.js';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName'); //buscando a ongName criada lá no login

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: { //Passa qual ONG está logada
                Authorization: ongId,
            }
        }).then(response => { //then -> Para pegar os dados
            setIncidents(response.data); 
        }) 
    }, [ongId]); //2 parametro -> 1 = qual função a ser executada? a de carregar os casos -- 2= quando vai ser executada? Sempre q o array '[]' mudar o '{}' irá atualizar

    // ----- Deletando um caso de dentro da interface ----
    async function handleDeleteIncident(id) { 
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });
                // ----- Apagar da pag sem precisar recarregar
            setIncidents(incidents.filter(incident => incident.id !== id)); //Quero manter apenas o incident.id que seja diferente do "id" do delete
        } catch (err) {
            alert('Error ao tentar deletar caso, tente novamente');
        }
    }
     // --- Criando a função de sair da pag
    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem Vinda, {ongName}!</span>

                <Link className="button" to="/cases/new">Enviar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiLogOut size={32} color="#41414d"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>            
                {incidents.map(incident => ( //Pecorrer os incidents retornando alguma coisa
                     <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</p> {/*formatando para por os R$ */}

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#e02041"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}