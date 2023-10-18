// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const listEl = document.querySelector(".gallery")
const markUp = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join("")

listEl.insertAdjacentHTML("beforeend", markUp)

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Поправлено опцію на "captions"
  captionDelay: 250,
  fadeSpeed: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});



console.log(galleryItems);


