import TestModel from "./test-model.js";
import TestView from "./test-view.js";

export default class TestControl {
    
    constructor(){

        this.view = new TestView(this.submitAnswer.bind(this), 
                                this.checkBox.bind(this), 
                                this.onNextClick.bind(this));
        this.model = new TestModel();
        this.model.selectChapters();
        this.model.randomise();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.questionTotal);

    }

    submitAnswer(e) {
            e.preventDefault();
            const options = this.view.selectAnswers();;
            this.model.check(options);
            console.log(this.model.checkedAnsw);
            this.view.renderResult(options, this.model.checkedAnsw, this.model.correctAnsw);
    }

    checkBox(e) {
        console.log(e.target.firstElementChild);
        if ( e.target.tagName == 'SPAN' ) {
            e.target.firstElementChild.checked = 'true';
        }
    }

    onNextClick() {
        this.model.selectNext();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.questionTotal);
    }
    
}
