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
const form = document.querySelector('form');
const resultsDiv = document.querySelector('#results');
const clearFiltersBtn = document.querySelector('#clearFilters');
let playingAudio = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = document.querySelector('#searchTerm').value;
    const maxDuration = document.querySelector('#maxDuration').value;
    const explicit = document.querySelector('#explicit').value;

    const url = `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=10`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            resultsDiv.innerHTML = '';

            if (data.resultCount === 0) {
                resultsDiv.innerHTML = '<p>No results found</p>';
            } else {
                data.results.forEach((result) => {
                    const trackName = result.trackName;
                    const artistName = result.artistName;
                    const albumPoster = result.artworkUrl100;
                    const previewUrl = result.previewUrl;
                    const durationInMs = result.trackTimeMillis;
                    const durationInMin = durationInMs / 60000;

                    if (maxDuration && durationInMin > maxDuration) {
                        return;
                    }

                    if (explicit === 'cleaned' && result.trackExplicitness.toLowerCase() === 'explicit') {
                        return;
                    } else if (explicit === 'explicit' && result.trackExplicitness.toLowerCase() === 'cleaned') {
                        return;
                    }

                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = `
                        <h2>${trackName}</h2>
                        <p>by ${artistName}</p>
                        <img src="${albumPoster}" alt="${trackName}">
                    `;

                    if (previewUrl) {
                        const audio = document.createElement('audio');
                        audio.controls = true;
                        audio.src = previewUrl;
                        // audio.i=aud;
                        resultDiv.appendChild(audio);
                        audio.className="aud";
                        audio.addEventListener('play', () => {
                            if (playingAudio && playingAudio !== audio) {
                                playingAudio.pause();
                            }
                            playingAudio = audio;
                        });
                    }

                    resultsDiv.appendChild(resultDiv);
                });
            }
        })
        .catch((error) => console.error(error));
});

clearFiltersBtn.addEventListener('click', () => {
    document.querySelector('#maxDuration').value = '';
    document.querySelector('#explicit').value = '';
    form.dispatchEvent(new Event('submit'));
});


