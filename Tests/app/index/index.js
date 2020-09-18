import IndexControl from './index-control.js';

document.addEventListener('DOMContentLoaded', () => {

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
                    loadController();
            }, rej => document.body.innerHTML = "ERROR LOADING ANSWERS DB")
            .catch(err => console.error(err));
        }
    }  

    function storeData(data, name) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    function loadController(){
        return new IndexControl();
    }    
    loadQuestions();
    loadAnswers();
    const controller = new IndexControl();
})
