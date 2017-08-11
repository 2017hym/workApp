var mysql=require("mysql");

var obj=mysql.createConnection({
    host:"sqld.duapp.com",
    port:"4050",
    user:"1250de1ae4c64a30ab3b2c43b3a97480",
    password:"a021088022984534a76974f520675d10",
    database:"lYfeoMgGwzFTIUsHfiTX"
});

obj.query("set names utf8");

module.exports=obj;
