//Run some jQuery
$(document).ready(function(){

   $('#searchTerm').keypress(function(e){
      if(e.keyCode==13)
      $('#linkadd').click();
    });

  //On click run code
  $("#searchTerm").keypress(function(){
    //Get value of input field
 var searchTerm = $('#searchTerm').val();
//Run ajax and get return in data type JSON
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
      $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          $('#output').html('');
          for(var i=0;i<data[1].length;i++){
            $('#output').prepend("<div><div class='tabs'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );
          }
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
  });
});
