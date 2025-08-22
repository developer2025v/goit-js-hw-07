const images = [
  {
    url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    alt: "Team planning with sticky notes",
  },
  {
    url: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    alt: "Hand holding light bulb",
  },
  {
    url: "https://images.pexels.com/photos/1124463/pexels-photo-1124463.jpeg",
    alt: "Smartphone with coffee cup",
  },
  {
    url: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
    alt: "Modern meeting room",
  },
  {
    url: "https://images.pexels.com/photos/2507015/pexels-photo-2507015.jpeg",
    alt: "Creative open space",
  },
  {
    url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    alt: "Open office working space",
  },
];

const galleryEl = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
