
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'white';
    link.style.backgroundColor = '#a1a1a1';
  });
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('active')) {
      link.style.color = '#efefef';
      link.style.backgroundColor = 'transparent';
    }
  });
  if (link.classList.contains('active')) {
    link.style.color = 'white';
    link.style.backgroundColor = '#a1a1a1';
  }
});
window.onload = function() {
  var img = document.getElementById('artist-image');
  img.style.transition = 'all 1s';
  img.style.transform = 'scale(2)';
  img.addEventListener('transitionend', function() {
      img.style.transform = 'scale(1)';
  });
};

function typeText(element, text, replaceText) {
  let index = 0;

  function type() {
    if (index < text.length) {
      if (replaceText) {
        element.textContent = text.substr(0, index + 1);
      } else {
        element.textContent += text.charAt(index);
      }
      index++;
      setTimeout(type, 30);
    }
  }

  type();
}

const heading = document.querySelector('.artist-info h2');
const headingText = heading.innerHTML;
heading.innerHTML = '';

const infoParagraph = document.querySelector('.artist-info p');
const infoText = infoParagraph.getAttribute('data-text');
infoParagraph.innerHTML = '';

typeText(heading, headingText, false);

setTimeout(() => {
  typeText(infoParagraph, infoText, false);
}, headingText.length * 45);

// Set the date we're counting down to
var countDownDate = new Date("June 30, 2023 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Calculate the time remaining between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with the id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = "BRACE YOURSELVES: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the album image and details
const albumImage = document.getElementById("album-image");
albumImage.src = "static/countdown.png";
albumImage.alt = "Album Image";

const albumTitle = document.getElementById("album-title");
albumTitle.innerHTML = "MASTER";








  // Create a dictionary with the review data
  var review = {
    name: nameInput.value,
    rating: rating,
    review: reviewInput.value
  };

  // Display the review data in a table
  var table = document.getElementById("review-table");
  var row = table.insertRow();
  var nameCell = row.insertCell();
  var ratingCell = row.insertCell();
  var reviewCell = row.insertCell();
  nameCell.innerHTML = review.name;
  ratingCell.innerHTML = review.rating;
  reviewCell.innerHTML = review.review;

  // Hide the review form
  reviewForm.style.display = "none";

function submitReview() {
  // Get the values from the form
  var name = document.getElementById("name").value;
  var rating = document.querySelector('input[name="rating"]:checked').value;
  var review = document.getElementById("review").value;
  
  // Create a new row in the table with the review information
  var table = document.getElementById("reviews-table");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var ratingCell = row.insertCell(1);
  var reviewCell = row.insertCell(2);
  nameCell.innerHTML = name;
  ratingCell.innerHTML = rating;
  reviewCell.innerHTML = review;
  
  // Reset the form
  document.getElementById("name").value = "";
  document.querySelector('input[name="rating"]:checked').checked = false;
  document.getElementById("review").value = "";
}
