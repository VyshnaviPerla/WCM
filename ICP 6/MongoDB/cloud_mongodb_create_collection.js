/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://vyshnavi:vyshu907@ds115931.mlab.com:15931/web';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("web");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
