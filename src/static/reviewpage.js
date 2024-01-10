// create a dictionary to store reviews
let reviews = {};

// add event listeners to all images
let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        // get the artist name from alt attribute of image
        let artist = this.alt;
        // create a form to collect review information
        let form = document.createElement('form');
        form.setAttribute('id', 'review-form');
        form.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="rating">Rating:</label>
            <input type="radio" id="1" name="rating" value="1">
            <label for="1">1</label>
            <input type="radio" id="2" name="rating" value="2">
            <label for="2">2</label>
            <input type="radio" id="3" name="rating" value="3">
            <label for="3">3</label>
            <input type="radio" id="4" name="rating" value="4">
            <label for="4">4</label>
            <input type="radio" id="5" name="rating" value="5">
            <label for="5">5</label><br><br>
            <label for="review">Review:</label><br>
            <textarea id="review" name="review" rows="4" cols="50"></textarea><br><br>
            <input type="button" value="Submit" onclick="submitReview('${artist}')">
            <input type="button" value="Cancel" onclick="cancelReview()">
        `;
        // append form to document
        document.body.appendChild(form);
    });
}

// function to submit review
function submitReview(artist) {
    // get review information from form
    let name = document.getElementById('name').value;
    let rating = document.querySelector('input[name="rating"]:checked').value;
    let review = document.getElementById('review').value;
    // create object to store review
    let reviewObj = {
        name: name,
        rating: rating,
        review: review
    };
    // add review object to reviews dictionary
    if (reviews[artist]) {
        reviews[artist].push(reviewObj);
    } else {
        reviews[artist] = [reviewObj];
    }
    // update table with reviews
    updateTable();
    // remove form from document
    document.body.removeChild(document.getElementById('review-form'));
}

// function to cancel review
function cancelReview() {
    // remove form from document
    document.body.removeChild(document.getElementById('review-form'));
}

// function to update table with reviews
function updateTable() {
    // Get the table body element
    var tableBody = document.getElementById("review-table-body");
  
    // Clear the existing rows from the table
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  
    // Loop through the reviews and add a row for each one
    for (var i = 0; i < reviews.length; i++) {
      // Create a new row element
      var row = document.createElement("tr");
  
      // Add a cell for the artist name
      var artistCell = document.createElement("td");
      var artistText = document.createTextNode(reviews[i].artist);
      artistCell.appendChild(artistText);
      row.appendChild(artistCell);
  
      // Add a cell for the rating
      var ratingCell = document.createElement("td");
      var ratingText = document.createTextNode(reviews[i].rating);
      ratingCell.appendChild(ratingText);
      row.appendChild(ratingCell);
  
      // Add a cell for the review
      var reviewCell = document.createElement("td");
      var reviewText = document.createTextNode(reviews[i].review);
      reviewCell.appendChild(reviewText);
      row.appendChild(reviewCell);
  
      // Add a cell for the reviewer name
      var reviewerCell = document.createElement("td");
      var reviewerText = document.createTextNode(reviews[i].reviewer);
      reviewerCell.appendChild(reviewerText);
      row.appendChild(reviewerCell);
  
      // Add the row to the table
      tableBody.appendChild(row);
    }
  }
  