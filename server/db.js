const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:postgrepass@localhost:5432/database';
const db = pgp(connectionString);

function clearSelectedTable(request, res, next) {
  let tableName = request.body[0].table;
  let query = 'delete from ' + tableName;
  db.any(query)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'ALL DATA DELETED'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function anyoneQuery(request, res, next) {
  let someQuery = request.body[0].query;

  db.any(someQuery)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'REQUEST IS SUCCESSFUL'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  clearSelectedTable: clearSelectedTable,
  anyoneQuery: anyoneQuery
};