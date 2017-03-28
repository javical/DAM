(function(){

    /*var user = document.getElementById('user').value;
    var pass = ducument.getElementById('pass').value;

    db.transaction(function(tx){
        var sql = "SELECT * FROM users WHERE user LIKE '" + user + "' AND password LIKE '" + pass + "'";
        var sql1 = "SELECT * FROM users WHERE user LIKE ? AND password LIKE ?";

        tx.executeSql(sql, [], function(){
            //registro de usuario
        }, function(){});
        //en esta nos pueden inyectar sentencias sql


        tx.executeSql(sql1, [user, pass], function(){
            //registro de usuario
        }, function(){});
        //aqui no nos pueden inyectar sentencias sql
    });
*/
    
    var tweet = {
        id : '250075927172759554',
        text: 'Aggressive Ponytail #freebandnames',
        author: 'Sean Cummings',
        created_at:''
    };

    var success = function(datos){
        console.log (datos);
    };

    APP.DB.insert(tweet);
    APP.DB.get(tweet.id, function(t){
        console.log(t);
    });
    APP.DB.getAll(success);

})();


