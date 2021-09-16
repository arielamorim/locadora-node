# locadora-node

Para testar a aplicação é necessário:
##### instalar as dependencias:
```npm install```

##### inicializar a aplicação:
```npm run start```

Feito isso, já é possível acessar os endpoints. 
A definição do uso do sistema está documentada através do Swagger:
```http://localhost:3000/api-docs/```

O primeiro endpoint a ser acessado, deve ser o de criação de usuário:
```/users/create```

Seguido pelo endpoint de login, para recebimento do token, que será utilizado na validação dos demais:
```/users/login```

Para uso dos demais endpoints, será necessário a utilização do token através do header:
```auth-token```

Lembrando que todo esse processo pode ser feito através do Swagger.

A jornada do usuário se da seguinte maneira:
- Criação do usuário
- Login no sistema
- Gerencias filmes (CRUD) ```/movies/*```
- Alugar filmes ```/rent/create```
- Retornar alugueis ```/rent/```
- Finalizar alugueis ```/rent/endRent```

Os dados do projeto estão sendo armazenados no Mongo Atlas, o acesso já está configurado. 
