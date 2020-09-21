import IndexControl from './index-control.js';

document.addEventListener('DOMContentLoaded', () => {
    //Remove db from local storage
    localStorage.removeItem('questions');
    localStorage.removeItem('answers');
    // localStorage.removeItem('chaptersRanges');

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

        
    loadQuestions();
    loadAnswers();
    loadChapters();
    const controller = new IndexControl();
})
