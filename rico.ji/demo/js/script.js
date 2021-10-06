
$(()=>{
   $(".accordion dt").on("click", function(e){
      // lexical this
      // $(this).next().slideToggle();

      $(this)
         .next().slideDown()
         .siblings("dd").slideUp();
   });


   $(".tabgroup .tab").on("click",function(e){
      let index = $(this).index();

      $(this).addClass("active")
         .siblings().removeClass("active");
      $(this).closest(".tabgroup")
         .find(".content").eq(index).addClass("active")
         .siblings().removeClass("active");
   })
});