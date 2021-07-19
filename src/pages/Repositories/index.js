import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/');
        
        }
    }, []);

   return(
    <div className="container">
            <h1 className="Title">Repositories</h1>

        <ul className="List">
            { repositories.map(repository => {
                return (
                    <li className="listItem">Repositório: {repository}</li>
                )
            }) }
        </ul>

        <Link to="/" className="link">Voltar</Link>

    </div>

   )
}