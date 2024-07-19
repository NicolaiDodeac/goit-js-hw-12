// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormRef = document.querySelector('.searchForm');
searchFormRef.addEventListener('submit', searchRequest);

function searchRequest(e) {
  e.preventDefault();
  const searchInput = e.target.elements.search.value.trim();
  //   console.log(searchInput);
  if (searchInput === '') {
    return;
  }

  const API_KEY = '44985278-910018cc950880488ff0b70a1';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length > 0) {
        return data;
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
searchRequest();
console.log(searchRequest);
// Галерея і картки зображень

// Елемент галереї (список однотипних елементів) міститься в HTML-документі, і в нього необхідно додавати розмітку карток зображень після HTTP-запитів.

// Кожне зображення описується об'єктом, з якого тобі цікаві тільки такі властивості:

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
// Перед пошуком за новим ключовим словом необхідно повністю очищати вміст галереї, щоб не змішувати результати запитів.

// Подивись демовідео роботи застосунку на цьому етапі.
// const galleryEl = document.querySelector('.gallery');

// function createPhotoCard({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `<li class="photo-card">
//         <img
//           src="${webformatURL}"
//           alt="${tags}"
//         />
//         <div class="wrapper">
//           <div class="info" >
//           <b class="student-info">${likes}</b>
//           <b class="student-info">${views}</b>
//           <b class="student-info">${comments}</b>
//           <b class="student-info">${downloads}</b>
//           </div>
//         </div>
//       </li>
//   `;
// }

// function allImagesTemp(arr) {
//   return arr.map(imageTemplate).join('');
// }

// const markup = allImagesTemp(images);
// galleryEl.insertAdjacentHTML('afterbegin', markup);

// const lightbox = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// function renderPhotoCards(object) {
//   markup.map;
// }

// function createPhotoCard({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `<li class="photo-card">
//         <img
//           src="${webformatURL}"
//           alt="${tags}"
//         />
//         <div class="wrapper">
//           <div class="info" >
//           <b class="student-info">${likes}</b>
//           <b class="student-info">${views}</b>
//           <b class="student-info">${comments}</b>
//           <b class="student-info">${downloads}</b>
//           </div>
//         </div>
//       </li>
//   `;
// }
// const createItemImg = images
//   .map(({ preview, original, description }) => (
//     <li class="gallery-item">
//       <a class="gallery-link" href="${original}">
//         <img
//           class="gallery-image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>
//   ))
//   .join('');
