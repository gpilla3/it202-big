$(document).ready(function() {
    $('#add-button').on('click', function() {
        var className = $('#Class').val();
        var room = $('#Room').val();
        var professor = $('#Professor').val();
        var start = $('#Start').val();
        var end = $('#End').val();
        console.log(className);
        console.log(room);
        console.log(professor);
        console.log(start);
        console.log(end);
    });
});