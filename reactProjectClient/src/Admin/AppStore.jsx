import { observable, makeObservable, action } from 'mobx';

class AppStore {
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
        })
    }

    setIsLogin = (val) => {
        this.isLogin = val;
    }

}


function sortArr(arrCopy2) {
    
    return arrCopy2?.sort(function (a, b) {
      return new Date(b.dateTime) - new Date(a.dateTime);
    });
  }

export default new AppStore();