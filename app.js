//create a listener that listens to when user submits a form
function getResults(){
  console.log('getResults');
  
  $("#number-chooser").submit(function(event){
    //get the number that is submitted to be able to use it
    var numberPrinted = $("#number-choice").val();
    
    //console.log('numberPrinted', numberPrinted);
    var numArray = [];
    for (var i = 1; i <= numberPrinted; i++){
      numArray.push(i);
      //console.log('numArray', numArray);
    };  
    //insert each sequence number into a div
    numArray.forEach(function(i){
      var newClass = "";
      if (i % 15 === 0) {
        i = 'fizzBuzz';
        newClass = 'fizzbuzz';
      }
      
      else if (i % 5 === 0) {
        i = 'buzz';
        newClass = 'buzz';
      }
      
      else if (i % 3 === 0){
        i = 'fizz';
        newClass = 'fizz';
      } 
      
      $(".js-results").append('<div class="fizz-buzz-item ' + newClass + '"><span>' + i + '</span></div>');
    });
    
    
  });
}


$(function(){
  getResults();
  //console.log('Sequence code'); 
});







