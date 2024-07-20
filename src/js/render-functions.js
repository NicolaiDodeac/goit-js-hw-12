export function renderPhotoCards(images, galleryEl) {
  galleryEl.innerHTML = '';
  // refs.searchFormRef.reset();
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
        <img class="image"
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info"><span class="atribute">Likes:</span> ${likes}</b>
          <b class="student-info"><span class="atribute">Views:</span> ${views}</b>
          <b class="student-info"><span class="atribute">Comments:</span> ${comments}</b>
          <b class="student-info"><span class="atribute">Downloads:</span> ${downloads}</b>
        </div>
      </div>
    </li>
  `;
}

// import { refs } from '../main';

// export function renderPhotoCards(images) {
//   refs.galleryEl.innerHTML = '';
//   refs.searchFormRef.reset();

//   const markup = images.map(createPhotoCard).join('');
//   refs.galleryEl.insertAdjacentHTML('beforeend', markup);
// }

// export function createPhotoCard({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `
//     <li class="photo-card">
//       <a class="gallery-link" href="${largeImageURL}">
//         <img
//           src="${webformatURL}"
//           alt="${tags}"
//           loading="lazy"
//         />
//       </a>
//       <div class="wrapper">
//         <div class="info">
//           <b class="student-info">Likes: ${likes}</b>
//           <b class="student-info">Views: ${views}</b>
//           <b class="student-info">Comments: ${comments}</b>
//           <b class="student-info">Downloads: ${downloads}</b>
//         </div>
//       </div>
//     </li>
//   `;
// }
