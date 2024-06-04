<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# Aplicación de Torneos de Esports

[![Nest.js Version](https://img.shields.io/badge/NestJS-^9.0.0-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeORM Version](https://img.shields.io/badge/TypeORM-^0.3.0-6E4A7E?logo=typeorm&logoColor=white)](https://typeorm.io/)
[![PostgreSQL Version](https://img.shields.io/badge/PostgreSQL-^13.0-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## Descripción

Esta aplicación de Nest.js permite la gestión de torneos de esports, incluyendo la creación, actualización, eliminación y consulta de torneos, jugadores y resultados.

## Características

- Módulos de `Tournament` y `Player` con sus respectivas entidades y servicios.
- Relación de uno-a-muchos entre `Tournament` y `Player`.
- Validación de datos utilizando `class-validator`.
- Configuración de la conexión a la base de datos PostgreSQL a través de TypeORM.
- Estructura modular y organizada siguiendo las mejores prácticas de Nest.js.

## Requisitos

- [Node.js](https://nodejs.org/) versión 14 o superior
- [PostgreSQL](https://www.postgresql.org/) versión 13 o superior
- [Docker](https://www.docker.com/) (opcional, para ejecutar la aplicación en un entorno aislado)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/stiv-ca/Van-Rossum-Tournament.git
   ```

2. Instala las dependencias:

   ```bash
   cd Van-Rossum-Tournament
   yarn install
   ```

3. Configura la conexión a la base de datos:

   - Modifica el archivo `app.module.ts` con los detalles de tu base de datos PostgreSQL.
   - También puedes utilizar el archivo `docker-compose.yml` para levantar un contenedor PostgreSQL con Docker.

4. Ejecuta las migraciones de la base de datos:

   ```bash
   yarn typeorm migration:run
   ```

5. Inicia la aplicación en modo de desarrollo:

   ```bash
   yarn start:dev
   ```

La aplicación estará disponible en `http://localhost:3000/api/v1`.

## Pruebas

- Ejecuta las pruebas unitarias:

  ```bash
  yarn test
  ```

- Ejecuta las pruebas e2e:

  ```bash
  yarn test:e2e
  ```

- Genera el reporte de cobertura de pruebas:

  ```bash
  yarn test:cov
  ```

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de enviar pull requests o de abrir problemas (issues) en el repositorio de GitHub.

## Licencia

Este proyecto se distribuye bajo la [Licencia MIT](LICENSE).

