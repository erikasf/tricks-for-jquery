


//jquery mosaic picture fade/hide


<button id="click-me">click me!</button>
//in your JavaScript file (I'm using the first version as a base), r










//replace the following line

setInterval(toggleDisplay, 100);
with this block of code

button = $('#click-me');
button.click(function(){
    count = 0;
    timer = setInterval(toggleDisplay, 100);
    $(this).prop("disabled", true);
});
//and this line

count = (count + 1) % total_pieces;
with this block of code

if(count == total_pieces - 1) {
    clearInterval(timer);
    button.removeAttr('disabled');
}
count++;