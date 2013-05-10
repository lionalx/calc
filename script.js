$(document).ready(function(){
  $("#calc").click(function(){
      var nprice = $("#new_price").val();
      var oprice = $("#old_price").val();
      var gap = 0;
      var per = 0;
      if(oprice>nprice) {
          gap = oprice-nprice;
          per = 100/oprice*gap;
          $("#result").text("הפער הוא "+gap.toFixed(2)+" שח, שווה ערך להנחה של "+per.toFixed(2)+"%.");
      } 
      else if(nprice>oprice) {
          gap = nprice-oprice;
          per = 100/nprice*gap;
          $("#result").text("הפער הוא "+gap.toFixed(2)+" שח, שווה ערך להתייקרות של "+per.toFixed(2)+"%.");
      }
      else {
          $("#result").text("המחירים זהים!");
      }
  });
});
