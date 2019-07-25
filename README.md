# CRUD Test Service API
API для проксирования SQL запросов к БД в инфраструктуре Predix.

## Установка
Скачать и установить PostgreSQL.
Скачать и установить последнюю версию NodeJs.

```bash
$ npm install -g express
```

```bash
$ npm install bluebird
```

```bash
$ npm install pg-promise
```

## Конфигурация
Убедиться, что соединение с базой данных postgres в файле server/db.js обновлено. Ниже указан шаблон конфигурации.
```
let connectionString = 'postgres://postgres:root@localhost:5432/database';
```



