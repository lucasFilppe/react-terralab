import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'javaScript-typescript-2022',
  description: 'curso front-end completo',
  link: 'https://github.com/lucasFilppe/javaScript-typescript-2022'
}

const repository2 = {
  name: 'explorer-lab-01',
  description: 'O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.',
  link: 'https://github.com/lucasFilppe/explorer-lab-01'
}


export function RepositoryList() {
  
  return (
    <>
      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository2} />
        </ul>
      </section>
    </>
  );
}
