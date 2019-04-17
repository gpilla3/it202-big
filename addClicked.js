//import Dexie from 'dexie.js';

$(document).ready(function() {
    $('#add-button').on('click', function() {
        var className = $('#Class').val();
        var theRoom = $('#Room').val();
        var theProfessor = $('#Professor').val();
        var theStart = $('#Start').val();
        var theEnd = $('#End').val();
        console.log(className);
        console.log(theRoom);
        console.log(theProfessor);
        console.log(theStart);
        console.log(theEnd);
        
          const db = new Dexie("friend_database");
          db.version(1).stores({
              friends: 'name,shoeSize,age'
          });

          //
          // Put some data into it
          //
          db.friends.put({name: "Dave", shoeSize: 10, age: 58});
          db.friends.put({name: "Nicolas", shoeSize: 8, age: 22});
        
    });
});

//export default db;
