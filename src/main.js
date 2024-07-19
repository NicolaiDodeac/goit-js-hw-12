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

function searchRequest(e) {
  e.preventDefault();

  const searchInput = e.target.elements.search.value.trim();
  if (searchInput === '') {
    return;
  }

  refs.loader.style.display = 'block';

  fetchImages(searchInput)
    .then(data => {
      if (data.hits.length > 0) {
        renderPhotoCards(data.hits, refs.galleryEl);
        refs.searchFormRef.reset();
        let gallery = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
        });
        gallery.refresh();
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
    })
    .finally(() => {
      refs.loader.style.display = 'none';
    });
}

// export const refs = {
//   searchFormRef: document.querySelector('.searchForm'),
//   galleryEl: document.querySelector('.gallery'),
// };
// export const searchInput = searchFormRef.elements.search.value.trim();
// function initializeLightbox() {
//   new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
//
// refs.searchFormRef.addEventListener('submit', searchRequest);

// function searchRequest(e) {
//   e.preventDefault();

//   if (searchInput === '') {
//     return;
//   }
//   fetchImages(searchInput)
//     .then(data => {
//       if (data.hits.length > 0) {
//         renderPhotoCards(data.hits, refs.galleryEl);
//       } else {
//         iziToast.error({
//           title: '',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//           color: 'red',
//         });
//       }
//     })
//     .catch(error => {
//       iziToast.error({
//         title: 'Error',
//         message: 'Something went wrong. Please try again later.',
//         position: 'topRight',
//         color: 'red',
//       });
//     });
// }
