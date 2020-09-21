export default class IndexView{
    constructor(gotoStats, selectChapter, goClick, checkBox){
        //Chapters select section
        this.modeSelect = document.querySelector('#mode-select');
        this.selectElement = document.querySelectorAll('.chapter');
        this.chaptersList = document.querySelector('ol');
        //Buttons
        this.goToStatsButton = document.querySelector('.nav-stats');
        this.goButton = document.querySelector('.go-button');
        this.randomButton = document.querySelector('.randomize-button');
        //Listeners
        this.goToStatsButton.addEventListener('click', gotoStats);
        this.selectElement.forEach(chapter => chapter.addEventListener('change', selectChapter));
        this.chaptersList.addEventListener('click', checkBox);
        this.modeSelect.addEventListener('submit', goClick);
    }

}