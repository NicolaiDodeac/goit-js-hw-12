import { renderPhotoCards } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchFormRef: document.querySelector('.searchForm'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.searchFormRef.addEventListener('submit', searchRequest);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

function searchRequest(e) {
  e.preventDefault();
  refs.galleryEl.innerHTML = '';
  refs.loader.style.display = 'block';
  const searchInput = e.target.elements.search.value.trim();
  if (searchInput === '') {
    return;
  }

  fetchImages(searchInput)
    .then(data => {
      if (data.hits.length > 0) {
        renderPhotoCards(data.hits, refs.galleryEl);
        refs.searchFormRef.reset();
        gallery.refresh();
      } else {
        iziToast.error({
          title: '',
          message: `<div>Sorry, there are no images matching</div> 
          <div>your search query. 
          Please try again!</div>`,
          position: 'topRight',
          color: '#ef4040',
          messageColor: ' #fafafb',
          messageSize: '16',
          iconColor: 'white',
          maxWidth: '432px  ',
          close: true,
          closeOnClick: true,
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
    })
    .finally(() => {
      refs.loader.style.display = 'none';
    });
}
