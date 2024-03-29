import React from "react";

//passando tipagem para as propriedades do nosso componentecomponente
interface RepositoryItemProps{
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <>
          <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">acessar repositorio</a>
          </li>
        </>
    );
}