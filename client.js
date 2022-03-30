console.log('js');

$( document ).ready( readyNow );

function readyNow(){
    console.log('JQ');
    $( '#sayHelloButton' ).on( 'click', sayHello );
    $( 'h2' ).mouseenter( h2MouseEnter );
    $( 'h2' ).mouseleave( h2MouseLeave);
    $( '.clicker' ).on( 'click', changeTextColor );
}//end readyNow

// function sayHello(){
//     //target input element by id
//     //get the value of the text input
//     let userName = $( '#nameInput' ).val();
//     console.log( 'hello', userName );
//     //empty input
//     $( '#nameInput' ).val( '' );//sets value to empty string ''
// }//end sayHello

function h2MouseEnter(){
    // console.log( 'in h2MouseEnter' ); //h2 will reach all the way across the webpage.
    //therefore even mousing over whitespace will trigger it
    $( this ).css( 'background-color', 'red' );
}//end h2MouseEnter

function h2MouseLeave(){
    $( this ).css( 'background-color', 'white' );
}//end h2MouseLeave

function sayHello(){
    //target input element by id
    //get the value of the text input
    let outputText = 'Hello, ' + $( '#nameInput' ).val();
    console.log( outputText );
    //display out text on DOM
    //target the output element
    let outputEl = $( '#helloOut' );
    //empty it
    outputEl.empty();
    //append the output text int it
    outputEl.append( outputText );
    //empty input
    $( '#nameInput' ).val( '' );//sets value to empty string ''
}//end sayHello

function changeTextColor(){
    //console.log( 'in changeTectColor ');
    $( this ).css( 'color', 'skyblue');
}//end changeTextColor