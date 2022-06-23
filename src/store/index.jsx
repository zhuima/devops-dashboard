import React from "react";
import LoginStore from "./login.Store";

class RootStore {
    // 组合模块
    constructor() {
        this.loginStore = new LoginStore();
    }

}


// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore());

// 导出组件
export const useStores = () => React.useContext(StoresContext);
