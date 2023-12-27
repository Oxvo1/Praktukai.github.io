document.addEventListener('DOMContentLoaded', function () {
    const prevButtons = document.querySelectorAll('.arrow.prev');
    const nextButtons = document.querySelectorAll('.arrow.next');

    prevButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            changeImage(button.dataset.gallery, -1);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            changeImage(button.dataset.gallery, 1);
        });
    });

    const scrollPrevButton = document.querySelector('.scroll-arrow.prev');
    const scrollNextButton = document.querySelector('.scroll-arrow.next');

    scrollPrevButton.addEventListener('click', function (event) {
        event.preventDefault();
        changeImage('mainGallery', -1);
    });

    scrollNextButton.addEventListener('click', function (event) {
        event.preventDefault();
        changeImage('mainGallery', 1);
    });

    // Викликаємо changeImage для відображення першої картинки при завантаженні сторінки
    changeImage('mainGallery', 1);
});

function changeImage(galleryId, direction) {
    const gallery = document.getElementById(galleryId);
    const images = gallery.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    images.forEach((image, index) => {
        if (image.style.display === 'block') {
            currentIndex = index;
        }
        image.style.display = 'none';
    });

    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    images[newIndex].style.display = 'block';
}
