import { renderPhotoCards } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchFormRef: document.querySelector('.searchForm'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more'),
};

let searchQuery = '';
let page = 1;
const perPage = 15;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

refs.searchFormRef.addEventListener('submit', searchRequest);
refs.loadMoreBtn.addEventListener('click', loadMoreImages);

async function searchRequest(e) {
  e.preventDefault();
  searchQuery = e.target.elements.search.value.trim();
  page = 1;
  refs.galleryEl.innerHTML = '';
  refs.searchFormRef.reset();
  refs.loadMoreBtn.style.display = 'none';
  if (searchQuery === '') {
    return;
  }
  await fetchAndRenderImages();
}

async function loadMoreImages() {
  page += 1;
  await fetchAndRenderImages();
  smoothScroll();
}

async function fetchAndRenderImages() {
  refs.loader.style.display = 'block';
  try {
    const data = await fetchImages(searchQuery, page, perPage);
    if (data.hits.length > 0) {
      renderPhotoCards(data.hits, refs.galleryEl);
      gallery.refresh();
      refs.loadMoreBtn.style.display =
        data.totalHits > page * perPage ? 'block' : 'none';
      if (page * perPage >= data.totalHits) {
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          color: 'blue',
        });
      }
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
        maxWidth: '432px',
        close: true,
        closeOnClick: true,
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    refs.loader.style.display = 'none';
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 3,
    behavior: 'smooth',
  });
}
