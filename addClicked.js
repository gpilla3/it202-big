$(document).ready(function() {
    $('#add-button').on('click', function() {
        var theStatus = $('#StatusCode').val();
        console.log(theStatus);
        
      var db = new Dexie("Status");
      db.version(1).stores({
          Codes: 'id'
      });

      //
      // Put some data into it
      //
      db.Codes.put({id: theStatus});
        
        db.Codes.each(function(code){
        console.log(code.id);
        document.getElementById("img").innerHTML += "<p>" + code.id + "</p>";
      });
    });
});