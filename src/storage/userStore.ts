import { makeAutoObservable } from "mobx";


class UserStore {
    uname: string | null = localStorage.getItem('uname')
    constructor(){
        makeAutoObservable(this)
    }

    init(uname: string){
        this.uname = uname
        localStorage.setItem('uname', uname)
    }
}

export default new UserStore() 