var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
 var db;
 

module.exports = function connectToMongo(callback) {
    if (db) 
    { 
        callback(null, db); 
        }
    else { 
        MongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function(err, conn) {
            db = conn;
            callback(err, conn);
        });
    }
}


