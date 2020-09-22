import IndexModel from "./index-model.js";
import IndexView from "./index-view.js"

export default class IndexControl{
    
    constructor(){
        this.loadDB();
        this.model = new IndexModel();
        this.view = new IndexView(this.selectChapter.bind(this), this.goClick.bind(this), this.checkBox.bind(this));
        if ( localStorage.getItem('location') == 'test') {
            window.location.href = "./test.html";
        } else { 
            localStorage.setItem('location', 'main');
        }
    }

    checkBox(e) {
        if ( e.target.tagName == 'LI' ) {
            e.target.firstElementChild.checked = e.target.firstElementChild.checked ? false : true;
            this.model.selectOptions(this.view.selectElement);
        }
        
    }

    goClick(e) {
        e.preventDefault();
        this.storeData();
        window.location.href = './test.html';
    }

    loadDB() {
        loadQuestions();
        loadAnswers();
        loadChapters();
    }

    selectChapter() {
        console.log('select');
        this.model.selectOptions(this.view.selectElement);
    }

    storeData() { 
        localStorage.setItem('modes',JSON.stringify({'randomize': this.view.modeSelect.random.value}));
        localStorage.setItem('chapters',JSON.stringify(this.model.selectedChapters || ['1']));
        const timeStart  = new Date();
        localStorage.setItem('time_start', timeStart.toLocaleString());
    }
    
}
// -------- Functions ----------- //
function loadQuestions(){
    console.log()
    if ( !localStorage.getItem('questions') ) {
        console.group('Loading questions db');
        fetch('./app/index/questions/QuestionsObj.json')
        .then(res => res.json())
        .then(data => {
            storeData(data,'questions');
            console.log('db loaded')
        }, rej => document.body.innerHTML = "ERROR LOADING QUESTIONS DB")
        .catch(err => console.error(err));
    }
}

function loadAnswers(){
    if ( !localStorage.getItem('answers') ) {
        console.group('Loading answers db');
        fetch('./app/index/answers/answersObj.json')
        .then(res => res.json())
        .then(data => {
                storeData(data, 'answers');
                console.log('db loaded')
        }, rej => document.body.innerHTML = "ERROR LOADING ANSWERS DB")
        .catch(err => console.error(err));
    }
} 

function loadChapters(){
    const chaptersRanges = {
            1: [1,213],
            2: [214,293],
            3: [294,346],
            4: [347,412],
            5: [413, 481],
            6: [482, 603],
            7: [604, 702],
            8: [703, 886],
            9: [887, 1002],
            10: [1003, 1092],
            11: [1093, 1239],
            12: [1240, 1469],
            13: [1470, 1508],
            14: [1509, 1661],
            15: [1662, 1706]
    }   
    localStorage.setItem('chaptersRanges', JSON.stringify(chaptersRanges));
}

function storeData(data, name) {
    localStorage.setItem(name, JSON.stringify(data));
}