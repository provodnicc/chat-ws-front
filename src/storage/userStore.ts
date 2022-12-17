import { makeAutoObservable } from "mobx";


class UserStore {
    uname: string
    constructor(){
        this.uname = ''
        makeAutoObservable(this)
    }

    init(uname: string){
        this.uname = uname 
    }
}

export default new UserStore() 