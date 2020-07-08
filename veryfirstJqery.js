

$(".box1" ).click(function() {
    $(this).css("background-color", "red")
    $(".box2").css("background-color", "white")
    $(".box3").css("background-color", "white")
});

$( ".box2" ).click(function() {
    $(this).css("background-color", "red")
    $(".box1").css("background-color", "white")
    $(".box3").css("background-color", "white")
});

$( ".box3" ).click(function() {
    $(this).css("background-color", "red")
    $(".box1").css("background-color", "white")
    $(".box2").css("background-color", "white")
});


$( ".box1, .box2, .box3" ).click(
    function() {
        $(this).css("background-color", "green")
    }
)

function probe(event) {    
    console.log(event)
}
document.querySelector('.box1').addEventListener('keydown', probe)
