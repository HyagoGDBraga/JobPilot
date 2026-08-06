# Database Migrations

Este projeto utiliza migrations SQL executadas diretamente no PostgreSQL do Supabase usando o cliente `psql` via Docker.

## Executar migrations

Certifique-se de estar na raiz do projeto:

```bash
cd jobPilot
```

Execute o comando abaixo:

```bash
docker run --rm -it ^
  -v "%cd%\src\migrations:/migrations" ^
  postgres:16-alpine ^
  psql "postgresql://postgres.dzlvcuzogjlyhyiidsts:[SUA-SENHA-AQUI]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?sslmode=require" ^
  -f /migrations/setup/setup.sql
```

Substitua:

```
[SUA-SENHA-AQUI]
```

pela senha do usuário `postgres` do banco Supabase.

## Estrutura esperada

```text
src/
└── migrations/
    ├── setup/
    │   └── setup.sql
    ├── users.sql
    ├── user_profiles.sql
    ├── professions.sql
    └── locations.sql
```

O arquivo `setup.sql` é responsável por executar os arquivos SQL na ordem correta.

## Observações

* O comando utiliza o container `postgres:16-alpine` apenas como cliente PostgreSQL.
* Nenhum PostgreSQL local é necessário.
* A conexão utiliza SSL (`sslmode=require`) por exigência do Supabase.
* Nunca versione a senha real do banco no Git.
* Use variáveis de ambiente ou um `.env` local para armazenar credenciais.

## Verificar tabelas criadas

Para acessar o banco:

```bash
docker run --rm -it postgres:16-alpine psql "postgresql://postgres.dzlvcuzogjlyhyiidsts:[SUA-SENHA-AQUI]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?sslmode=require"
```

Dentro do PostgreSQL:

```sql
\dt
```

irá listar as tabelas criadas.
