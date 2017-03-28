var APP = APP || {} ;
APP.DB = (function() {
    /*Variables privadas*/
    var db,
        cfg = {
            name : 'Twitter.db',
            version : '1.0',
            description : 'Twitter database',
            size : 1*1024*1024
        };
        createtable = "CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAIN pk_tweet PRIMARY KEY, text TEXT, author TEXT, created_at INTEGER)";
    try{
        db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
    }
    catch(e){
        if (e.code ===11){
            db.changeVersion(cfg.version);
            //con todo lo que conlleve el cambio de versión!
        }
        console.log(e);
    }

    console.log (db);

    if (db) {
        var createSchema = function (tx){
            tx.executeSql(createtable, [], function(tx, results){
                console.log('Table Tweet created');
                console.log (results);
            }, function(tx, error){
                console.log('DB error: ' + error);
            });
        };
        db.transaction(createSchema);
    }

    var insert = function(tweet){
        var sql = "INSERT INTO tweets (id, text, author, created_at) VALUES (?,?,?,?)";

        db.transaction(function(tx){
            tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.created_at], function(tx, results){
                console.log('Tweet inserted');
                console.log(results);
            }, function(tx, error){
                console.log('Error inserting tweet');
                console.log (error);
            });
        });
    };

    var getAll = function(success){
        db.transaction(function(tx){
            var sql = "SELECT * FROM tweets ORDER BY created_at";
            tx.executeSql(sql, [],function(tx, results){
                var datos = [];

                for (var i = results.rows.length - 1; i >= 0; i--) {
                    datos.push(results.rows.item(i));
                }
                success (datos);
            },function(tx, error){
                console.log(error);
            });
        });
    };

    var get = function(id, success){
        db.transaction(function(tx){
            var sql = "SELECT * FROM tweets WHERE id = ?";
            tx.executeSql(sql, [id],function(tx, results){
                var datos = [];

                for (var i = results.rows.length - 1; i >= 0; i--) {
                    datos.push(results.rows.item(i));
                }
                success (datos);
            },function(tx, error){
                console.log(error);
            });
        });
    };

    return{
        insert : insert,
        getAll : getAll,
        get    : get
    };

})();