# Node Typescript Boilerplate 

[![Build Status](https://travis-ci.org/sanathks/node-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/sanathks/node-typescript-boilerplate)

### Installation

install dependancies
```sh
$ yarn global add typescript
$ yarn install 
```

configure env properties 

```sh
$ cp .env.example .env
```
then replace following with acctual values 

```
TZ=Australia/Sydney #Timezone
DB_HOST='' #Mongodb connection string
SEND_GRID_TOKEN="" #Sengrid token
```

### How to run 

Run as in dev env
```sh
$ yarn dev
```
Build and run as prod
```sh
$ yarn prod
```
Run test 
```sh
$ yarn test
```
