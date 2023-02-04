var navLinks = document.querySelectorAll("nav a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




const form = document.getElementById("comment-form");
const usernameInput = document.getElementById("username-input");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("comments-list");



const commentTemplate = document.getElementById("comment-template").content;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const comment = commentInput.value;

  // Create a new comment element
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector(".username").textContent = username;
  commentElement.querySelector(".comment-text").textContent = comment;

  const likeBtn = commentElement.querySelector(".like-btn");
  const likeCount = commentElement.querySelector(".like-count");

  likeBtn.addEventListener("click", function() {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  });

  
  commentsList.appendChild(commentElement);

  usernameInput.value = "";
  commentInput.value = "";
});
var navLinks = document.querySelectorAll("nav a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



