
/**
 * Created by Administrator on 2016/10/11.
 * 管理页面
 */
//window.location.reload();

function reload(){
    select(function(tt){
        $(".tb1>tbody").children(":not(:first)").remove();
        tt.forEach(function(item,index){
                var newTr=$(".yc").clone().removeClass("yc");
                newTr.find(":checkbox").val(item.id);
                newTr.children().eq(1).text(item.name);
                newTr.children().eq(2).text(item.gender);
                newTr.children().eq(3).text(item.age);
                newTr.children().eq(4).text(item.address);
                $("tbody").append(newTr);
        })
    })
}
$(function(){
    reload();
    $("button").eq(1).off("click");
    $("button").eq(1).click(function(){
        var ids=$(":checkbox:checked");
        console.log(ids);
        var id=ids.map(function(index,item){
            //console.log(index,item);
            console.log($(item).val()) ;
            return +$(item).val();
        });
        console.log(id);
        id.each(function (index,id) {
            //console.log(index,id);
            deleteStudent(id,function () {
                reload();
            })
        })
    })
})

