$(document).ready(function(){

  $("#form").validate({
     rules: {
      old_price: {
        required: true,
        digits: true
      },
      new_price: {
        required: true,
        digits: true
      }
    },
    submitHandler: function(form) {

      var nprice = parseInt($("#new_price").val());
      var oprice = parseInt($("#old_price").val());
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

    }
    });

    $.extend(jQuery.validator.messages, {
      required: "שדות חובה",
      digits: "רק ספרות!!",
      minlength: jQuery.validator.format("")
    });
});

