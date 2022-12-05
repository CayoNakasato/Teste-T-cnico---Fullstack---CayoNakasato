# Tenha controle de seus clientes e contatos

Projeto no qual você pode criar cadastros de clientes e cadastrar contatos
ligados diretamente a algum cliente específico! Você pode editar e excluir(soft delete)
cada contato que registrou.

## Tecnologias Utilizadas

Neste projeto foram usados as seguintes tecnologias:
```
Fron End:
      - React
      - Material Ui
      - Style Module
      - Yup
      - Axios
      - Lx-react-form
```

```
Back End:
      - Node.Js
      - Express
      - TypeScript
      - TypeORM
      - PostgreSQL
      - Nodemon
      - Sucrase
      - UUID
```

#### Assim que clonar o repositório entre na pasta com :
	
	cd Teste-Tecnico-Fullstack-Jr-CayoNakasato

#### Abra o terminal e execute o comando:

	docker-compose up --build

#### Após terminar o docker compose use os comando nesta sequência!
	1. docker exec -it api yarn typeorm migration:generate src/migrations/initialMigration -d src/data-source.ts
	2. docker exec -it api yarn typeorm migration:run -d src/data-source.ts

Em seguida pode acessar a aplicação no:
	http://localhost:3000/
