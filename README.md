# Nodejs + Expressjs + MongoDB + Docker 


## Build image docker.

```sh
$ docker-compose build 
```

```sh
$ docker-compose -f docker-compose.dev.yml build 
```

# Build + Start 

## Prod

```sh
$ docker-compose up --build
```
## Dev

```sh
$ docker-compose -f docker-compose.dev.yml up --build
```

## Request

```sh
$ curl --request GET --url http://localhost:3000/
```

```sh
$ curl --request POST \
  --url http://localhost:3000/user \
  --header 'content-type: application/json' \
  --data '{
	"nome": "user 1",
	"email": "user@teste.com"
}'
```

```sh
$ curl --request GET --url http://localhost:3000/user
```

