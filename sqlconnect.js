const pg = require('pg');
//local run
/*const pool = new pg.Pool({
  host     : '127.0.0.1',
  user     : 'postgres',
  password : '86804808',
  port: '5432',
  database: 'sadbusiness'});*/

//connect to cloud server
const pool = new pg.Pool({
    host: '35.199.62.100',
    socketPath: '/cloudsql/rock-loop-220020:us-east4:storehack/.s.PGSQL.5432',
    user: 'heather',
    password: '12345',
    database: 'postgres'});
var user = "heal";
var password = "123456";
var content ="abcs";
var error;
var info;


funtion test(){
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})
}
function savecontent(){
  pool.query("INSERT INTO users(usr,password,content) VALUES('"+user+"', '"+password+"', '"+content+"') ;",
  (err, res) => {
   console.log(err, res);
   error = (err==undefined);
   pool.end();
   });
}
//get record from history
function checkuser(){
pool.query("SELECT content FROM users WHERE usr='"+user+"' "+"and password='"+password+"' ;",
(err, res) => {
console.log(err, res);
error = (err==undefined);
info = res.rows[0].content;
pool.end();
});
}

function contentcheck(){
  pool.query("Show tables;",
  (err, res) => {
  console.log(err, res);
  pool.end();
  });
}


savecontent();
