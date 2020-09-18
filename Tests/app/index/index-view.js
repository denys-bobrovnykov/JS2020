export default class IndexView{
    constructor(selectChapter, goClick, checkBox){
        this.modeSelect = document.querySelector('#mode-select');
        this.selectElement = document.querySelectorAll('.chapter');
        // this.selectElement = document.querySelector('#chapters-select');
        this.chaptersList = document.querySelector('ol');
        
        this.goButton = document.querySelector('.go-button');
        this.randomButton = document.querySelector('.randomize-button');


        this.selectElement.forEach(chapter => chapter.addEventListener('change', selectChapter));
        this.chaptersList.addEventListener('click', checkBox);

        this.goButton.addEventListener('click', goClick);
    }

}