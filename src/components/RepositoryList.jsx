import { RepositoryItem } from "./RepositoryItem";
import {useEffect, useState} from 'react';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] =  useState([])

  //consumindo dados da api do gitihub usando useEffect
  useEffect(() => {
    fetch('https://api.github.com/users/lucasFilppe/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])
  
  return (
    <>
      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          {repositories.map(repository => {
            return<RepositoryItem repository={repository}/>
          })}
        </ul>
      </section>
    </>
  );
}
