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
        id : '250075927172759552',
        text: 'Aggressive Ponytail #freebandnames',
        author: 'Sean Cummings',
        created_at:''
    };

    APP.DB.insert(tweet);

    var success = function(datos){
        console.log (datos);
    };

    APP.DB.getAll(success);

})();


