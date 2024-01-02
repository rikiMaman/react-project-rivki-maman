import { observable, action, computed, makeObservable, runInAction } from 'mobx';
class MobxData {
    isLogin = false;
    buisnessData={};
    constructor() {
        makeObservable(this, {
            serviceType: observable,
            setServiceType: action,
            isAdmin: observable,
            setIsAdmin: action,
            edit: observable,
            setEdit: action,
            buisnessData: observable,
            getBuisnessData: computed,
            setBusinessData: action,
           
        });
         this.initBuisnessData()
    }
    edit = false;
    setEdit = (val) => {
        this.edit = val;
    }
    isAdmin = false;
    setIsAdmin = (val) => {
        this.isAdmin = val;
    }
    serviceType = "";
    setServiceType = (val) => {
        this.serviceType = val;
    }
    setBusinessData = (val)=>{
        this.buisnessData = val;
    }
    initBuisnessData = async()=>{
        let data = await fetch('http://localhost:8787/businessData')
        let datajson = await data.json();
        this.buisnessData = datajson;
       
    }
    get getBuisnessData(){
        return this.buisnessData;
    }
}
export default new MobxData();