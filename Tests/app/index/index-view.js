export default class IndexView{
    constructor(gotoStats, selectChapter, goClick, checkBox){
        //Chapters select section
        this.chaptersList = document.querySelector('ol');
        this.modeSelect = document.querySelector('#mode-select');
        this.selectElement = document.querySelectorAll('.chapter');
        //Buttons
        this.goButton = document.querySelector('.go-button');
        this.goToStatsButton = document.querySelector('.nav-stats');
        this.randomButton = document.querySelector('.randomize-button');
        //Listeners
        this.chaptersList.addEventListener('click', checkBox);
        this.goToStatsButton.addEventListener('click', gotoStats);
        this.modeSelect.addEventListener('submit', goClick);
        this.selectElement.forEach(chapter => chapter.addEventListener('change', selectChapter));
    }

}