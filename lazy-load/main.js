const images = document.querySelectorAll("[data-src], [data-srcset]");

function preloadImage(img) {
  if (img.dataset.srcset) {
    img.srcset = img.getAttribute("data-srcset");
  } else if (img.dataset.src) {
    img.src = img.getAttribute("data-src");
  }
}

const imgOptions = {
  threshold: 0,
  rootMargin: "100px 0px 100px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach(image => imgObserver.observe(image));