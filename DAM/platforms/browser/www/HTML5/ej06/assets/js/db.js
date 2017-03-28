var APP = APP|| {} ;
APP.DB = (function() {
    /*Variables privadas*/
    var db,
        cfg = {
            name : 'Twitter.db',
            version : '2.0',
            description : 'Twitter database',
            size : 1*1024*1024
        };

    var init = function(success){
        if(!db){
            var request = indexedDB.open(cfg.name, cfg.version);

            request.addEventListener('success', function(e){
                console.log('database: ' + cfg.name + ' OK.');
                db = e.target.result;
                success();
            });

            request.addEventListener('upgradeneeded', function(e){
                console.log('Updating database...');

                db = e.target.result;

                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });

                console.log(tweets);
            });

            request.addEventListener('error', function(e){
                console.log('Error opening ' + cfg.name + ' database.');
            });
        }else{
            success();
        }
    };

    var insert = function(tweet){

        /*var transaction = db.transaction([tweet], 'readwrite');
        var store = transaction.objectStore('tweets');
        var request = store.add(tweet);*/

        init(function(){
            var transaction = db.transaction(['tweets'], 'readwrite');
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });
    };

    var getAll = function(success){
        init(function(){
            var data = [];
            var transaction = db.transaction(['tweets'], 'readonly');
            var store = transaction.objectStore('tweets');
            var request = store.openCursor();
            request.addEventListener('success',function(e){
                var cursor = e.target.result;
                if (cursor) {
                    data.push(cursor.value);
                    cursor.continue();
                }
                success(data);
            });
            request.addEventListener('error',function(e){
                success(null);
            });
        });
    };

    var get = function(id, success){
    init(function(){
        var transaction = db.transaction(['tweets'], 'readonly');
        var store = transaction.objectStore('tweets');
        var request = store.get(id);
        request.addEventListener('success',function(e){
            success(e.target.result);
        });
        request.addEventListener('error',function(e){
            success(null);
        });
            
        });
    };
    return{
        insert : insert,
        getAll : getAll,
        get    : get
    };

})();