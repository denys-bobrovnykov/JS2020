import TestModel from "./test-model.js";
import TestView from "./test-view.js";

export default class TestControl {
    
    constructor(){

        this.view = new TestView(this.submitAnswer.bind(this), 
                                this.checkBox.bind(this), 
                                this.onNextClick.bind(this),
                                this.onPrevClick.bind(this));
        this.model = new TestModel();
        this.modes = JSON.parse(localStorage.getItem('modes'));
        console.log(this.modes.randomize);
        this.model.selectChapters();
        if ( this.modes.randomize == 1) this.model.randomise();

        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions);
        console.log(this.modes);

    }

    submitAnswer(e) {
        e.preventDefault();
        const options = this.view.selectAnswers();;
        this.model.check(options);
        this.model.updateAnsweredList();

        if (this.model.correct) { // jumps to next if correct
            this.onNextClick();
        }
        console.log(this.model.checkedAnsw);
        this.view.renderResult(options, this.model.checkedAnsw, this.model.correctAnsw);
    }

    checkBox(e) {
        if ( e.target.tagName == 'SPAN' ) {
            e.target.firstElementChild.checked = 'true';
        }
    }

    onNextClick() {
        this.model.selectNext();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.getCorrectAnswers());
    }

    onPrevClick() {
        this.model.selectPrev();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.getCorrectAnswers());
    }
    
}