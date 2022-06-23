import { makeAutoObservable } from 'mobx';
import { http } from '../../utils/http';


class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this);
    }
    // 登录
    login = async ({ username, password }) => { 

        const res = await http.post('/login', { username, password });
        this.token = res.data.token
    };
}


export default  LoginStore;


