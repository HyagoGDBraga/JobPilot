# Docker - Comandos úteis

## Subir o ambiente

Criar as imagens e iniciar todos os serviços:

```bash
docker compose up --build
```

Iniciar em segundo plano (background):

```bash
docker compose up --build -d
```

---

## Parar o ambiente

Parar e remover os containers:

```bash
docker compose down
```

Parar sem remover:

```bash
docker compose stop
```

Iniciar containers já criados:

```bash
docker compose start
```

---

## Reiniciar aplicação

Reiniciar apenas o backend:

```bash
docker compose restart app
```

Reiniciar todos os serviços:

```bash
docker compose restart
```

---

## Rebuild da aplicação

Quando alterar Dockerfile ou dependências:

```bash
docker compose up --build
```

Forçar reconstrução sem usar cache:

```bash
docker compose build --no-cache
docker compose up
```

---

## Logs

Ver logs do backend:

```bash
docker compose logs -f app
```

Ver logs de todos os serviços:

```bash
docker compose logs -f
```

Ver últimas linhas:

```bash
docker compose logs --tail=100 app
```

---

## Status dos containers

Ver containers ativos:

```bash
docker compose ps
```

Ver todos os containers Docker:

```bash
docker ps -a
```

---

## Entrar dentro dos containers

Entrar no container da aplicação:

```bash
docker exec -it jobPilot sh
```

Entrar no PostgreSQL:

```bash
docker exec -it postgres sh
```

Entrar no Redis:

```bash
docker exec -it redis sh
```

---

## Banco de dados PostgreSQL

Abrir terminal do PostgreSQL:

```bash
docker exec -it postgres psql -U postgres -d app
```

Listar bancos:

```sql
\l
```

Listar tabelas:

```sql
\dt
```

Sair:

```sql
\q
```

---

## Redis

Abrir Redis CLI:

```bash
docker exec -it redis redis-cli
```

Testar conexão:

```bash
PING
```

Resposta esperada:

```
PONG
```

Ver chaves:

```bash
KEYS *
```

Sair:

```bash
exit
```

---

## Volumes

Listar volumes:

```bash
docker volume ls
```

Ver informações de um volume:

```bash
docker volume inspect nome_volume
```

Remover volumes não utilizados:

```bash
docker volume prune
```

⚠️ Remove volumes que não estão sendo usados.

---

## Limpeza do Docker

Remover containers parados:

```bash
docker container prune
```

Remover imagens não utilizadas:

```bash
docker image prune
```

Remover tudo que não está sendo usado:

```bash
docker system prune
```

Remover incluindo imagens:

```bash
docker system prune -a
```

⚠️ Cuidado: pode remover imagens baixadas.

---

## Imagens

Listar imagens:

```bash
docker images
```

Baixar imagem:

```bash
docker pull nome-da-imagem
```

Remover imagem:

```bash
docker rmi nome-da-imagem
```

---

## Containers

Listar containers rodando:

```bash
docker ps
```

Listar todos:

```bash
docker ps -a
```

Parar container:

```bash
docker stop nome-container
```

Iniciar container:

```bash
docker start nome-container
```

Remover container:

```bash
docker rm nome-container
```

Remover container forçando:

```bash
docker rm -f nome-container
```

---

## Desenvolvimento

Reiniciar após alterações no código:

```bash
docker compose restart app
```

Acompanhar hot reload:

```bash
docker compose logs -f app
```

Executar comando dentro do container:

```bash
docker compose exec app comando
```

Exemplo:

```bash
docker compose exec app npm install pacote
```

---

## Verificar Docker

Versão instalada:

```bash
docker --version
```

Informações do Docker:

```bash
docker info
```

Verificar funcionamento:

```bash
docker run hello-world
```

---

## Fluxo comum de desenvolvimento

Primeira execução:

```bash
docker compose up --build
```

Após alterar código:

```bash
docker compose restart app
```

Após alterar dependências (`package.json`):

```bash
docker compose down
docker compose up --build
```

Após alterar banco ou variáveis de ambiente:

```bash
docker compose down
docker compose up --build
```

Ver problemas:

```bash
docker compose logs -f app
```