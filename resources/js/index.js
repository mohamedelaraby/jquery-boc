 //Jquery start here
 $(document).ready(function () {
     // Hide h1
    //  $('h2').hide();
    //  $('h2#heading1').hide();
    //  $('h2.heading1').hide();
    
    // Change the paragarph color
    //$('p span').css('color','#ff0000');
    
    //Grap the first list item
    $('ul.list-group li:nth-child(odd)').css('background','#555');
    $('ul#list li:first').css('background','#ff0000');
    $('ul.list-group li:last').css('background','#00ff00');
    $('ul#list li:nth-child(4)').css('background','#0000ff');
    $('ul#list li:nth-child(8)').css('background','	#9ccc9c');
    $('ul.list-group li:nth-child(2n)').css('background','#f4f4f4');

    //inputs
    //Hide the button type
    $(':button').hide();

    //Hide the submit input type
    $(':submit').hide();

    // Hide the text input type
    $(':text').hide();

    // Show all the input type content
    $(':submit').show();
    $(':text').show();
    $(':button').show();

    //Links
     // Change the Color
     $('[href]').css('background','#f5b375');
     
     // Specific link color
    $('a[href="https://yahoo.com"]').css('color','#d90838');
    $('a[href="https://google.com"]').css('background','#c598a7');

});