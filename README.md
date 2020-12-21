# API PERPUSTAKAAN

## Requirements
- latest docker-compose
- text editor (VIM)
- snack
- create docker network with name of `local`
- create docker container `postgres` with `local` network

## Installation
- clone this repo
- create `.env` file with basic setup inside `.env.example`
- change the current `env` with yours
- `docker-compose --env-file ./.env up -d`
- go to inside `api` container
- `yarn migrate`
- happy coding :D
