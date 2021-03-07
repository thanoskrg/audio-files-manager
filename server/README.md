# Sound Files Manager (server)

## Tech Stack

* Python
* Flask (Python MVC framework)

## Usage

Requires [docker-compose](https://docs.docker.com/compose/).

```bash
docker-compose up
```

> This command will start the Python Flask built-in server and serve everything that is under the `app/static` folder. For now, this folder includes the compiled output of the `yarn build` command as described in `../client/README.md`.

Open your browser at `http://localhost:4000/` and watch the app in action.

## Development

Requires [docker-compose](https://docs.docker.com/compose/).

```bash
docker-compose up
```

This watches all changes that happen inside the `app` folder and reloads the service automatically.

## TODO

* Add db models
* Install flask-restless on top of sqlalchemy (Python ORM) to create API REST endpoints
* Retrieve data from the database
* Write unit & integration tests