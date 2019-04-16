$(function(){
    var n  = 6;
    var $btn = $('input[type="button"]');
    $btn.val('同意('+n+'s)');
    var timer = setInterval(function(){
      n--;
      if(n==0){
        clearInterval(timer);
        $btn.val('同意');
        $btn.removeAttr('disabled');                              
      }else{
        $btn.val('同意('+n+'s)');                  
      }          
    },1000);
    $btn.click(function(){
      $btn.val('同意(6s)');           
    });
});
