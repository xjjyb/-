/**
 * Created by Administrator on 2016/10/11.
 */
function getDB() {
    var db = window.openDatabase("my sql", 1.0, "this is my sql", 2 * 1024 * 1024);
    return db;
}
//创建表
(function(){
    //获取数据库
    var db=getDB();
    //获取事务
    db.transaction(function(transaction){
        var sql="CREATE TABLE IF NOT EXISTS student(number INTEGER, name TEXT,gender TEXT,age INTEGER,address TEXT)";
        transaction.executeSql(sql,[],function(transaction){
            console.log("创建成功");
        })
    })
})();
function Student(number,name,gender,age,address){
    this.number=number;
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.address=address;
}
//添加数据
function save(student,handle){
    var db=getDB();
    db.transaction(function(transaction){
        var sql="insert into student values(?,?,?,?,?)";
        transaction.executeSql(sql,[student.number,student.name,student.gender,student.age,student.address],
            function(transaction){
                handle();
                location.reload();
        })
    })
}
//查询数据
    function cx(handle){
        var db = getDB();
        db.transaction(function (transaction) {
            var sql = "select * from student";
            transaction.executeSql(sql, [], function (transaction, result) {
                console.log(result.rows);
                var rows = result.rows;
                handle(rows);
                //console.log(result.rows[i]);

            })
        })
    }


//删除数据
function del(id,handle){
    alert(3);
    var db=getDB();
    db.transaction(function (transaction) {
        var sql="delete from student where number=?";
            transaction.executeSql(sql,[id],function (transaction,result) {
                handle();

            })
    })
}
//查询(更新)
function update(id,hindler) {
    var db=getDB();
    var sql="select * from student where number =?";
    db.transaction(function (transaction) {
        transaction.executeSql(sql,[id],function (transaction,result) {
            var gg=result.rows[0];
            //conbsole.log(rows);
            hindler(gg);

        })
    })
}
//更新
function up(student,hindler ) {
    var db=getDB();
    var sql="update student set name=?,gender=?,age=?,address=?where number=? ";
    db.transaction(function (transaction) {
        transaction.executeSql(sql,[student.name,student.gender,student.age,student.address,student.number],function (transaction,result) {
            hindler();
            location.reload();
        },function (transaction,error) {
            console.log(error);
        })
    })
}



