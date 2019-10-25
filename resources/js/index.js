 //Jquery start here
 $(document).ready(function () {
    //  // Hide h1
    // //  $('h2').hide();
    // //  $('h2#heading1').hide();
    // //  $('h2.heading1').hide();
    
    // // Change the paragarph color
    // //$('p span').css('color','#ff0000');
    
    // //Grap the first list item
    // $('ul.list-group li:nth-child(odd)').css('background','#555');
    // $('ul#list li:first').css('background','#ff0000');
    // $('ul.list-group li:last').css('background','#00ff00');
    // $('ul#list li:nth-child(4)').css('background','#0000ff');
    // $('ul#list li:nth-child(8)').css('background','	#9ccc9c');
    // $('ul.list-group li:nth-child(2n)').css('background','#f4f4f4');

    // //inputs
    // //Hide the button type
    // $(':button').hide();

    // //Hide the submit input type
    // $(':submit').hide();

    // // Hide the text input type
    // $(':text').hide();

    // // Show all the input type content
    // $(':submit').show();
    // $(':text').show();
    // $(':button').show();

    // //Links
    //  // Change the Color
    //  $('[href]').css('background','#f5b375');
     
    //  // Specific link color
    // $('a[href="https://yahoo.com"]').css('color','#d90838');
    // $('a[href="https://google.com"]').css('background','#c598a7');
    
    // // Hide everything
    // $('*').hide();
    // // Show every thing
    // $('*').show();
});


////////////////////////////[ Mouse Events  ]//////////

$(document).ready(function(){

    // [ Click ] 
    // $('#btn1').click(function(){
    //     $('div#container').css('color',"#333");
    // });

    // //hide button 2
    // $('#btn1').on('click', function(){
    //     $('#btn2').hide();
    // })

    // Hide the pragraph content
    // $('#btn1').on('click', function(){
    //     $('p.lead').hide();
    // });

    // //Show the paragaph content
    // $('#btn2').on('click', function(){
    //     $('p.lead').show();
    // });

    // [ Double click: - dbclick ]
    // $('#btn1').dblclick(function(){
    //     $('p.lead').toggle();
    // });
    // $('#btn2').dblclick(function(){
    //     $('.display-5').toggle();
    // });

        // [ Hover : - hover ]
    // $('#btn1').hover(function(){
    //     $('.lead').toggle();
    // });
    
    // [ Hover : - hover ]
    // $('#btn1').on('mousemove',function(){
    //     $('.btn').css('background','#f4f4f4');
    // });

    // [ mouse up : - mouseup ]
    // $('#btn1').on('mousedown', function(){
    //     $('.lead').css('font-size','4rem');
    // });
    // // [ mouse down : - mousedown ]
    // $('#btn1').on('mouseup', function(){
    //     $('.lead').css('font-size','2rem');
    // });

    // $('#btn1').on('dblclick',function(event){
    //     // console.log(event.currentTarget.innerHTML);
    //     // console.log(event.currentTarget.innerText);
    //     // console.log(event.currentTarget.id);
    //     // console.log(event.currentTarget.outerHTML);
    //     // console.log(event.currentTarget.className);

    // });
    

    // Get the mouse position in inner html
    // $(document).on('mousemove',function(e){
    //      console.log('Coords: Y:' + e.clientY + 'X: ' + e.clientX);
    // });

    // $(document).on('mousemove',function(e){
    //     $('.lead').html('Coords: Y: ' + e.clientY + " X: "
    //     + e.clientX);
    // })


    // [ Inputs ]
    // $('input').focus(function(){
    //     //$('.lead').css('color','#333');
    //     // Change the focus mode
    //     // $('input#name').css('background','#CDC0B0');
    //     // $('input#email').css('background','#524c46');
    //     // $('input#gender').css('background','#cdc0b0');
    //     $(this).css('background','#cdc0b0');
    // });

    // Hnadle the Focus mode
    // $('input').blur(function (){
    //     $(this).css('background','#f4f4f4');
    // }); 
    
    // $('input').blur(function (){
    //     $(this).css('background','#ccc');
    // });


    // Key up and Key down
    // $('input').keyup(function (e){
    //     // change the font size
    //     $(this).css('color','#333');
    //     // Get what we type out
    //     $('.lead').html(e.target.value);
    // });
     

    // Change event
    // $('select#gender').change(function (e){
    //     $('.lead').html(e.target.value);
    // });

    // Submit
    $('#form').submit(function(e){
        e.preventDefault();
        //  Get the value of input
        let name = $('input#name').val();

        // Get the email address
        let email = $('input#email').val();

        $('.lead').html('name : ' + name + ' '  + 'Email: ' + email);


    });





});