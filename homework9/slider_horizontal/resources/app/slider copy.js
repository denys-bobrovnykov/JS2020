document.addEventListener('DOMContentLoaded', () => {

    const images = ['6150787-v485d97219c6-6.jpg', '6141913-v4d0634d6201-6.jpg',
    '6141357-v42f8c453e21-6.jpg',
    '2387699-v40-15.jpg',
    '2387620-v40-15.jpg'
    ];

    const albumSize = images.length;
    const controls = document.querySelector('.controls');
    const image = document.querySelector('.picture');
    const slideWindow = document.querySelector('.slide-window');
    const scroll = document.querySelector('.scroll');

    for ( img of images ) {
        const pic = new Image();
        pic.src = `./resources/img/` + img;
        pic.onload = () => scroll.append(pic);
    }

    let i = 0;

    controls.addEventListener('click', () => {
        if ( event.target.className == 'slide-left' ) {
            i--;
            i = i > 0 ? i : albumSize - 1;
        }
        if ( event.target.className == 'slide-right' ) {
            i++;
            i = i < albumSize - 1 ? i : 0;
        }
        image.src = `./resources/img/${images[i]}`;
    })
})