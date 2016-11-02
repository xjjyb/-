/**
 * Created by Administrator on 2016/10/11.
 * 添加页面
 */

$(function(){
    $("#sv").off();
    $("#sv").submit(function(){
        var number=$(this).find("[name='number']").val();
        var name=$(this).find("[name='name']").val();
        var gender=$(this).find("[name='gender']").val();
        var age=$(this).find("[name='age']").val();
        var address=$(this).find("[name='address']").val();
        var student=new Student(number,name,gender,age,address);
        save(student,function(){
            alert("保存成功");
        });
    })
})
