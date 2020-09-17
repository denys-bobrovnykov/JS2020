export default class IndexView{
    constructor(selectChapter, goClick){
        this.modeSelect = document.querySelector('#mode-select');
        this.goButton = document.querySelector('.go-button');
        this.selectElement = document.querySelector('#chapters-select');

        this.selectElement.addEventListener('change', selectChapter);
        this.goButton.addEventListener('click', goClick);
    }

}