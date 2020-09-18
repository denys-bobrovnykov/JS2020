import IndexModel from "./index-model.js";
import IndexView from "./index-view.js"

export default class IndexControl{
    constructor(){
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
            e.target.firstElementChild.checked = 'true';
            this.model.selectOptions(this.view.selectElement);
        }
        
    }

    goClick() {
        this.storeData();
        this.cleanUpStorage();
    }

    selectChapter() {
        console.log('select');
        this.model.selectOptions(this.view.selectElement);
        // this.model.selectOptions(this.view.selectElement.options);
    }

    storeData() { 
        localStorage.setItem('modes',JSON.stringify({'mode': this.view.modeSelect.mode.value, 'randomize': this.view.modeSelect.random.value}));
        localStorage.setItem('chapters',JSON.stringify(this.model.selectedChapters || ['1']));
    }
    
    cleanUpStorage() {
        localStorage.removeItem('wrongAnswers');
        localStorage.removeItem('correctAnswers');
    }
}