import IndexModel from "./index-model.js";
import IndexView from "./index-view.js"

export default class IndexControl{
    constructor(){
        this.model = new IndexModel();
        this.view = new IndexView(this.selectChapter, this.goClick);
    }
    goClick = () => {
        this.storeData();
    }
    selectChapter = () => {
        console.log('select');
        this.model.selectOptions(this.view.selectElement.options);
    }
    storeData() { 
        localStorage.setItem('mode',this.view.modeSelect.mode.value);
        localStorage.setItem('chapters',JSON.stringify(this.model.selectedChapters || ['1']));
    }
}