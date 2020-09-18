import IndexView from "./index-view.js";

export default class IndexModel{
    constructor(){
        this.view = new IndexView();
        this.selectedChapters;
    }
    selectOptions(options) { // DATA
        console.log(options);
        this.selectedChapters = Array.from(options)
                        .reduce((acc, opt) => opt.checked ? acc.concat(opt.value) : acc,[]);
                        // .reduce((acc, opt) => opt.selected ? acc.concat(opt.value) : acc,[]);
        console.log(this.selectedChapters);
    }
    
}