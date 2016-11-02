/**
 * Created by Administrator on 2016/11/2.
 */
$(function () {
    $("#ss").submit(function () {
        var number=$(this).find("[name='number']").val();
        var name=$(this).find("[name='name']").val();
        var gender=$(this).find("[name='gender']").val();
        var age=$(this).find("[name='age']").val();
        var  address=$(this).find("[name='address']").val();
        var studen=new Student(number,name,gender,age,address);
        console.log(studen);
        up(studen,function () {
            alert('更新成功');

        })
    });

})
