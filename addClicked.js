
$(document).ready(function() {
    $('#add-button').on('click', function() {
        var className = $('#class-text-field').val();
        var room = $('#room-text-field').val();
        var start = $('#start-text-field').val();
        var end = $('#end-text-field').val();
        var professor = $('#professor-text-field').val();
        console.log(className);
        console.log(room);
        console.log(start);
        console.log(end);
        console.log(professor);
    });
});
