// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: strong-build
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

/**
 * Run `node import.js` to import the test data into the db.
 */

var app = require('../app');
var db = app.dataSources.db;

var models = ['AccessToken', 'Role', 'ACL', 'RoleMapping'];
db.autoupdate(models, function(err) {
  if(err) {
    console.error(err);
  } else {
    console.log('Tables are created for ', models);
  }
});
