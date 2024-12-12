// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');
const likeButton = document.querySelectorAll('.like-glyph')

modal.className = 'hidden';

for (const button of likeButton) {
  button.addEventListener('click', () => {
    mimicServerCall()
      .then((message) => {
        if (button.innerText === EMPTY_HEART) {
          alert(message);
          button.innerText = FULL_HEART;
          button.classList.add('activated-heart');
        } else if (button.innerText === FULL_HEART) {
          button.innerText = EMPTY_HEART;
          button.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        modal.classList.remove('hidden');
        errorMessage.textContent = error;
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 3000)
      })
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
