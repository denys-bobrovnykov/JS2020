// source 
// https://www.cssscript.com/pick-a-color-from-an-image-using-canvas-and-javascript/#:~:text=Create%20a%20canvas%20element%20in%20your%20document.&text=Make%20sure%20the%20canvas%20element%20is%20hidden.&text=Create%20a%20container%20to%20output%20the%20color%20information.&text=The%20Javascript%20to%20enable%20the,color%20to%20your%20document%20body.

document.addEventListener('DOMContentLoaded', () => {
    let img = new Image;
    img.src = '../resources/images/image0.png'
    img.width = '300';
    img.height = '166';
    let canvas = document.querySelector('#cs');
    let x;
    let y;
    
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    };
    canvas.addEventListener('click', (e) => {
        x = e.offsetX;
        y = e.offsetY; 
        console.log(`${e.offsetX} ${e.offsetY}`);
        let context = canvas.getContext('2d');
        let data = context.getImageData(x, y, 1, 1).data;
        document.body.style.backgroundColor = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    });
})
