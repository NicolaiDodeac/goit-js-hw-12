const API_KEY = '44985278-910018cc950880488ff0b70a1';

export function fetchImages(value) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
