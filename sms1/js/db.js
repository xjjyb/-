/**
 * Created by Administrator on 2016/10/11.
 */


//创建数据库及仓库
(function init(dbname,storename){
    //开始创建数据库
    var request=window.indexedDB.open(dbname);
    request.onupgradeneeded=function(event){
        //创建数据库
        var db=event.target.result;
        //创建仓库
        if(db.objectStoreNames.contains(storename)){
            db.deleteObjectStore(storename);
        }
        db.createObjectStore(storename,{
            keyPath:"id",
            autoIncrement:true
        })
    }

})("db2","student");

//获取仓库,对仓库进行增删改查

function getStore(storename,handle){
    //获取数据库
    var request=window.indexedDB.open("db2");
    request.onsuccess=function(){
        //获取数据库
        var db=this.result;
        //获取事务
        var transaction=db.transaction(storename,"readwrite");
        //获取仓库
        var store=transaction.objectStore(storename);
        //对于事件，可以通过回调函数来把值传递出去；
        handle(store);
    }
}
//保存
function save(student,handle){
    getStore("student",function(store){
        var request=store.put(student);
        request.onsuccess=function(event){
            handle(event);
        }
    })
}
//查询
function select(handle){
    getStore("student",function(store){
        var request=store.getAll();
        request.onsuccess=function(event){
           // console.log(event);(数组)
           var tt=event.target.result;
            handle(tt);
        }
    })
}

//删除
function deleteStudent(id,handler){
    getStore("student",function(store){
        var request=store.delete(id);
        request.onsuccess=function(){
            handler();
        }
    })
}
function  Student(name,gender,age,address){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.address=address;
}
