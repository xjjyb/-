
/**
 * Created by Administrator on 2016/10/11.
 * 管理页面
 */
//window.location.reload();
function reload(){
 cx(function(rows){
  $(".tb1>tbody").children(":not(:first)").remove();
  for(i=0;i<rows.length;i++){
   $(function(){
    var newTr = $("<tr>"
        +"<td>"+"<input type='checkbox' value="+rows[i].number+">"+"</td>"
        +"<td>"+rows[i]['name']+"</td>"
        +"<td>"+rows[i]['gender']+"</td>"
        +"<td>"+rows[i]['age']+"</td>"
        +"<td>"+rows[i]['address']+"</td>"
        +"</tr>");
    $("tbody").append(newTr);
   })
  }
 });
}

$(function(){
 reload();
   //删除
          $("button").eq(1).off("click");
          $("button").eq(1).click(function(){
           var ids=$("input:checkbox:checked");
           console.log(ids);
           ids.each(function(index,item){
            //console.log(index,item);
            //console.log($(item).val());
            var id=$(item).val();
            console.log(id);
             del(id,function () {
              reload();
             })

           })
          })
         //更新
        $("button:contains('修改')").on('click',function () {
         $("body").load("student_update.html");
         $("input:checkbox:checked").each(function (index, item) {
          //alert(1);
          console.log($(item).val());
          $(function () {
             update($(item).val(),function (result) {
              //alert(2);
              console.log(result.number);
              $("input[name='number']").val(result.number);
              $("input[name='name']").val(result.name) ;
              $("input[name='gender']").val(result.gender);
              $("input[name='age']").val(result.age) ;
              $("input[name='address']").val(result.address);
             });
          })

         })

        })
});




