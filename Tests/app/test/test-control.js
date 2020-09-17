import TestModel from "./test-model.js";
import TestView from "./test-view.js";

export default class TestControl {
    
    constructor(){

        this.view = new TestView(this.submitAnswer, this.onNextClick);
        this.model = new TestModel();
        this.model.selectChapters();
        this.model.randomise();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.questionTotal);

    }

    submitAnswer = (e) => {
            e.preventDefault();
            const options = this.view.selectAnswers();;
            this.model.check(options);
    }

    onNextClick = () => {
        this.model.selectNext();
        this.view.renderQuestion(this.model.forDisplay, this.model.selectedQuestions, this.model.questionTotal);
    }
    
}
