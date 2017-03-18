(function(){
  "use strict";
  $(document).ready(function(){
    $('#navbar-toggle').bind("click",function(){
    if($('#navbar-responsive').attr('dropdown')=="false"){
      $('#navbar-responsive').attr('dropdown','true');
    }else{
      $('#navbar-responsive').attr('dropdown',"false");
    }
  });
  })
  
})();