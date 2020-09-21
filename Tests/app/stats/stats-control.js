import StatsModel from "./stats-model.js";
import StatsView from "./stats-view.js";

export default class StatsControl{
    constructor(){

        this.view = new StatsView(this.gotoMain.bind(this));
        this.model = new StatsModel();
        if(localStorage.getItem('session_results')) this.showList();
        
    }

    gotoMain(){
        window.location.href = './index.html';
    }

    showList(){
        this.view.renderList(this.model.data);
    }
}