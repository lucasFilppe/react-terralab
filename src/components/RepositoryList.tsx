import { RepositoryItem } from "./RepositoryItem";
import {useEffect, useState} from 'react';

import '../styles/repositories.scss';
import React from "react";

interface Repository{
  name: string,
  description: string,
  html_url: string
  
}

export function RepositoryList() {
  const [repositories, setRepositories] =  useState<Repository[]>([])

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
            return<RepositoryItem key={repository.name} repository={repository}/>
          })}
        </ul>
      </section>
    </>
  );
}
