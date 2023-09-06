import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) =>{ 
    const markup = arr.map((item) => `<li class="gallery_item"> 
    <a class="gallery_link" href="${item.original}">
    <img
        class="gallery_image"
        src="${item.preview}"
        alt="${item.description}"
        width="360"
        />
    </a>
    </li>`).join("");

     listEl.style.listStyle = "none";
    container.insertAdjacentHTML("afterbegin", markup);
}

renderList(galleryItems, listEl);

  new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr', 
        captionsData: 'alt', 
        animationSpeed: 250,
});