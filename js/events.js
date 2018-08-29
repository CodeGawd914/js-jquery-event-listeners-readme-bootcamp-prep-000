function getIt(){
   $('p').on("click",function(){
    alert("Hey!")
  })
}
function frameIt(){
   $('img').on("load", function(){
     $('img').addClass('tasty')
  })
}
function pressIt(){
   $("form").on('keydown',function(e){
    if (e.which === '71'){
      window.alert(" you pressed g")
    }
  })
}
function submitIt(){
  $("form").on("submit",function (){
    if ($("input:first" ).val()==="correct"){
      w
    }
  })
}
$(document).ready(function(){
getit()
// call functions here

});
