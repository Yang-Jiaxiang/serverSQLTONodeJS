var sql=require('mssql')

var dbConfig={
    server:"LAPTOP-RB0017B9\\SQLEXPRESS",
    database:"BANK",
    user:"sa",
    password:"1234",
    port:49670
};

function getEmp(){
    var conn = new sql.ConnectionPool(dbConfig);
    var req=new sql.Request(conn);

    conn.connect(function(err){
        if(err){
            console.log(err);
            return;
        }
        req.query("SELECT* FROM Transactioninformation",function(err,recordset){
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset)
            }
            conn.close();
        })
    })
}

getEmp();