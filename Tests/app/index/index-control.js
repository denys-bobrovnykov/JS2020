import IndexModel from "./index-model.js";
import IndexView from "./index-view.js"

export default class IndexControl{
    
    constructor(){
        this.model = new IndexModel();
        this.view = new IndexView(this.gotoStats.bind(this), this.selectChapter.bind(this), this.goClick.bind(this), this.checkBox.bind(this));
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

    goClick(e) {
        e.preventDefault();
        this.storeData();
        this.cleanUpStorage();
        window.location.href = "./test.html";
    }

    gotoStats(){
        window.location.href = './statistic.html';
    }

    selectChapter() {
        console.log('select');
        this.model.selectOptions(this.view.selectElement);
        // this.model.selectOptions(this.view.selectElement.options);
    }

    storeData() { 
        localStorage.setItem('modes',JSON.stringify({'randomize': this.view.modeSelect.random.value}));
        localStorage.setItem('chapters',JSON.stringify(this.model.selectedChapters || ['1']));
        const timeStart  = new Date();
        localStorage.setItem('time_start', timeStart.toLocaleString());
    }
    
    cleanUpStorage() {
        localStorage.removeItem('wrongAnswers');
        localStorage.removeItem('correctAnswers');
    }
}