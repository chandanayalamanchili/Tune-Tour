// when an "Add" button is clicked
$('.add-song-btn').click(function () {
  // get the song name from the HTML page
  var songId = $(this).data('id');
  var songName = $('#' + songId).text().trim();

  // remove whitespace from songName
  songName = songName.replace(/\s+/g, '');

  // send the song name to the server using AJAX
  $.ajax({
    type: 'POST',
    url: '/add-song',
    data: { songName: songName },
    success: function (response) {
      // handle the response from the server
      alert('Song added to playlist successfully');
    },
    error: function (xhr, status, error) {
      // handle the error
      alert('Song already added');
    }
  });
});

const linker = document.querySelectorAll('.navbar a');
linker.forEach(link => {
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