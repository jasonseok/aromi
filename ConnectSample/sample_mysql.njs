var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'apmsetup'
});

conn.connect();
conn.query('USE meeting');
conn.query('select * from tb_meet',function(err,results,fields){
    if(err)
        throw err;
    
    console.log(results);
    console.log(fields);
});

conn.end();