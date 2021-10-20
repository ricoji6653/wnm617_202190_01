
//DOCUMENT READY
$(()=> {

   checkUserId();

   //EVENT DELIGATION
   $(document)

   .on("submit","#signin-form",function(e) {
      e.preventDefault();
      checkSigninForm();
   })

   //ANCHOR CLICKS
   .on("click",".js-logout",function(e) {
      e.preventDefault();
      sessionStorage.removeItem("userId");
         checkUserId();
   })


   .on("click","[data-activate]",function(e){
      e.preventDefault();
      let target = $(this).data("activate");
      $(target).addClass("active")
   })
   .on("click","[data-deactivate]",function(e){
      e.preventDefault();
      let target = $(this).data("deactivate");
      $(target).removeClass("active")
   })
   .on("click","[data-toggle]",function(e){
      e.preventDefault();
      let target = $(this).data("toggle");
      $(target).toggleClass("active")
   })

   ;

   $("[data-template]").each(function(){
      let target = $(this).data("template");
      $(this).html($(target).html());
      })


});