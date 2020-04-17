//não é necessária para o APP esse aquivo, é apenas para efeitos didáticos
import React from 'react'; //como vou usar html, é obrigatório importar o React

function Header(props) { //Aqui a gente colocou props = propriedade -- p/ assim mudar por paginação, no codigo fonte mudar por lá e n precisar vir aq
    return ( //Utiliza o {} para usar o JS dentro do HTML --- prosps.children = para escrever frase sem precisar comolocar a propriedade title
        <header> 
            <h1>{props.children}</h1>  
        </header>
    );
}

export default Header;