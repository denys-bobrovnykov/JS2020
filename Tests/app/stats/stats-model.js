import StatsView from "./stats-view.js";

export default class StatsModel{
    constructor(){
        this.view = new StatsView();
        this.data = JSON.parse(localStorage.getItem('session_results'));
    }
    
}