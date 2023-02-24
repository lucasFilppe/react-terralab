export function RepositoryItem(props){
    return(
        <>
          <li>
            <h2>{props.repository.name}</h2>
            <p>{props.repository.description}</p>
            <a href={props.repository.link} target="_blank">acessar repositorio</a>
          </li>
        </>
    );
}