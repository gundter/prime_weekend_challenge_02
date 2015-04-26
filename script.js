/**
 * Created by Prime on 4/24/15.
 */
var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

//Found the shuffleArray function courtesy of Stack Overflow
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var teamSize = 0;

function emptyChildren(){
    for(var i = 1; i < 11; i++){
        $("#team" + i).empty();
    }
}

$(document).ready(function(){

    $(".teamSelect").on('click', 'div', function(){
        teamSize = $(this).data("size");

    });

    $('#refresh').on('click', function(){
        if(teamSize == 0){
            alert("Select a team size!");
            return;
        }

        emptyChildren();
        for(var j = 0; j <= teamSize; j++){
            $('#team' + j).prepend("<p class='newEntry'>Team " + j + "</p>");
            $('.newEntry').hide().fadeIn("fast");
        }
        var count = 1;
        shuffleArray(people);
        for(var i=0; i < people.length; i++){
            $("#team" + count).append("<p class='newEntry'>" + people[i] + "</p>");
            $('.newEntry').hide().delay(i * 1000).fadeIn('slow');
            count++;
            if(count > teamSize){
                count = 1;
            }
        }
    });
});