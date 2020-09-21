import TestModel from "./test-model.js";
import TestView from "./test-view.js";

export default class TestControl {
    
    constructor(){

        this.view = new TestView(this.submitAnswer.bind(this), 
                                this.checkBox.bind(this), 
                                this.onNextClick.bind(this),
                                this.onPrevClick.bind(this),
                                this.gotoMain.bind(this),
                                this.saveSession.bind(this));
        this.model = new TestModel();

        console.log(localStorage.getItem('location'));


        if ( localStorage.getItem('location') == 'test' ) {

            const sessionData = JSON.parse(localStorage.getItem('session_data'));
            this.model.forDisplay = sessionData.forDisplay;
            this.model.selectedQuestions = sessionData.selectedQuestions;// SELECTed questions array
            this.model.forCheck = sessionData.forCheck; //question number to check with ANSWERS db
            this.model.chapters = sessionData.chapters;
            this.model.questionLeft = sessionData.questionLeft;
            this.model.wrongAnswersList = sessionData.wrongAnswersList; // wrong answers array
            this.model.correctAnswList = sessionData.correctAnswList; // correct answers array
            this.model.answeredList = sessionData.answeredList; // viewed qlready questions 
        }

        if ( localStorage.getItem('location') == 'main' ) {

            this.modes = JSON.parse(localStorage.getItem('modes'));
            // this.model.selectChapters();

            if ( this.modes.randomize == 1) this.model.randomise();
            localStorage.setItem('location', 'test');
        } 
        console.log(this.model.forDisplay);
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions);
        this.saveSession();

    }

    submitAnswer(e) {
        e.preventDefault();
        const options = this.view.selectAnswers();;
        this.model.check(options);
        this.model.updateAnsweredList();

        // if (this.model.correct) { // jumps to next if correct
        //     this.onNextClick();
        // }
        this.view.renderResult(options, this.model.checkedAnsw, this.model.correctAnsw);
        this.saveSession();
    }

    checkBox(e) {
        if ( e.target.tagName == 'DIV' ) {
            e.target.firstElementChild.checked = e.target.firstElementChild.checked ? false : true;
        }
    }

    gotoMain() {

        localStorage.removeItem('session_data');
        localStorage.setItem('location', 'main');
        this.saveStats();
        window.location.href = './index.html';
    }


    onNextClick() {
        this.model.selectNext();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.getCorrectAnswers());
        this.saveSession();
    }

    onPrevClick() {
        this.model.selectPrev();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.getCorrectAnswers());
        this.saveSession();
    }


    saveStats() {
        let sessionsResults = JSON.parse(localStorage.getItem('session_results')) || [];
        const dateNow = new Date();

        const sessionStats = {
            chapters: this.model.chapters,
            answeredList: this.model.answeredList,
            wrongAnswersList: this.model.wrongAnswersList,
            correctAnswList: this.model.correctAnswList,
            start: localStorage.getItem('time_start'),
            finish: dateNow.toLocaleString(),
        }
        sessionsResults.unshift(sessionStats);
        if (sessionsResults.length > 5) sessionsResults.pop();
        localStorage.setItem('session_results', JSON.stringify(sessionsResults));
        localStorage.removeItem('time_start');

    }

    saveSession() {
        const sessionData = {

            forDisplay: this.model.forDisplay,
            selectedQuestions: this.model.selectedQuestions,
            forCheck: this.model.forCheck,
            chapters: this.model.chapters,
            wrongAnswersList: this.model.wrongAnswersList, // wrong answers array
            correctAnswList: this.model.correctAnswList, // correct answers array
            answeredList: this.model.answeredList, // viewed qlready questions 
            questionLeft: this.model.questionLeft
        
        }
        localStorage.setItem('session_data', JSON.stringify(sessionData));
    }
    
}