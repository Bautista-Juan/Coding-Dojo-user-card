/* This function updates the number of connections you have.
 */

function acceptUser() {
    var currentNumber = document.querySelector(".circle-500");
    var newCount = parseInt(currentNumber.innerText);
    var incrementNUm = newCount + 1;
    currentNumber.innerText = incrementNUm + "+";
}
/* This function removes the any user requests and updates the
 number of request shown.
 */
function removeUser() {
    var deleted = document.querySelector(".first-request, .second-request");
    deleted.remove();
    var currentNumber = document.querySelector(".circle-2");
    var newCount = parseInt(currentNumber.innerText);
    var decrementNUm = newCount - 1;
    currentNumber.innerText = decrementNUm
    
}

/**
 * This function will change the user's name when edit profile
 * is clicked.
 */

function editProfile() {
    var newName = document.querySelector("#users-name");
    newName.innerText = "Byron E.";
}

