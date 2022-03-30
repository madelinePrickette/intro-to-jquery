console.log('js');

$( document ).ready( readyNow );

function readyNow(){
    console.log('JQ');
    $( '#sayHelloButton' ).on( 'click', sayHello );
}//end readyNow

function sayHello(){
    //target input element by id
    //get the value of the text input
    let userName = $( '#nameInput' ).val();
    console.log( 'hello', userName );
    //empty input
    $( '#nameInput' ).val( '' );//sets value to empty string ''
}//end sayHello