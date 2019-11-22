var submitButton = $('.submitbutton');

submitButton.on('click',storeInput);

function storeInput() {
 var userInput = $('.userInput').val();
 var commentContainer = $('.displayUserInput');
 commentContainer.append(userInput);
}