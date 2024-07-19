// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormRef = document.querySelector('.searchForm');
const galleryEl = document.querySelector('.gallery');

searchFormRef.addEventListener('submit', searchRequest);

function searchRequest(e) {
  e.preventDefault();
  const searchInput = e.target.elements.search.value.trim();

  if (searchInput === '') {
    return;
  }

  const API_KEY = '44985278-910018cc950880488ff0b70a1';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length > 0) {
        renderPhotoCards(data.hits);
        // initializeLightbox();
      } else {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        color: 'red',
      });
    });
}

function renderPhotoCards(images) {
  // Clear previous results
  galleryEl.innerHTML = '';
  searchFormRef.reset();

  // Generate new markup
  const markup = images.map(createPhotoCard).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

function createPhotoCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="photo-card">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info">Likes: ${likes}</b>
          <b class="student-info">Views: ${views}</b>
          <b class="student-info">Comments: ${comments}</b>
          <b class="student-info">Downloads: ${downloads}</b>
        </div>
      </div>
    </li>
  `;
}

function initializeLightbox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}
