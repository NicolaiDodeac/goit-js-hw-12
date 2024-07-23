export function renderPhotoCards(images, galleryEl) {
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
