export class Quote {
    public showDets: boolean;
    constructor(public id:number, public user:string, public author:string, public quote:string, public date:Date){
        this.showDets = false
    }
}
