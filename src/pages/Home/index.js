import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState(''); 
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/Repositories');
    })
    .catch(err => {

      setErro(true);

    });
  }

  return (
    <div className="containerHome">
       <img  src="Github-logo.png" alt="40" width="12%"/>
      <h1>Consulte qualquer Repositório do Github no link abaixo!</h1>
      <input placeholder="Insira o nome do Usuário" className="usuarioInput" value={usuario} onChange={e =>setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
        
      {erro ? <span>Usuário não encontrado, tente novamente!</span> : ''}
    </div>

    
  );

}

export default App;
