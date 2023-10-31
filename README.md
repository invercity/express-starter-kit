# Node.JS Express Starter KIT
![GitHub package.json version](https://img.shields.io/github/package-json/v/invercity/express-starter-kit)
[![Tests](https://github.com/invercity/express-starter-kit/actions/workflows/test.yml/badge.svg)](https://github.com/invercity/express-starter-kit/actions/workflows/test.yml)
[![Depfu](https://badges.depfu.com/badges/61a377c6b1c96818543591a295b7dcbf/overview.svg)](https://depfu.com/github/invercity/express-starter-kit?project_id=12848)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/23ca4f215dc6497097ad0ad2e13c2936)](https://www.codacy.com/app/andriy.ermolenko/express-starter-kit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=invercity/express-starter-kit&amp;utm_campaign=Badge_Grade)
![LIcense](https://img.shields.io/github/license/invercity/express-starter-kit)

Starter KIT for Express based apps

## Features
- Express REST service
- Bootstrap 3.x based UI****
- SMTP mailer
- ESLint checking
- Github actions
- Logging with log4js
- Mocha + Supertest tests
- Basic Docker
## TODO
- Swagger
- Replace bower with npm
- Vue@3, bootstrap@5 setup

## Requirements
-   Node.JS ```v14``` and above

## Installation
Clone project, and install app dependencies:  

```npm i```
    
## Configure app
Edit ```config/<ENV>.json``` using your favourite editor to configure app

## Check js style
```npm run lint```

## Run tests
```npm test```

## Running application
```npm start```

## Running application in Docker
```npm run docker_up```
    
By default, application will work on ```localhost:3000```   
