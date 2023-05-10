import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: {
        id: -1,
        refreshToken: "",
        acessToken: "",
        userInfo: {
          name: "noLogin",
          nickname: "noLogin",
          role: -1,
          urlLength: -1,
        },
      },
    };
  },
  mutations: {
  
    cleanToken(state) {
      localStorage.clear(); //清空本地存储
      state.token.id = -1;
      state.token.refreshToken = "";
      state.token.acessToken = "";
      state.token.userInfo.name = "noLogin";
      state.token.userInfo.nickname = "noLogin";
      state.token.userInfo.role = -1;
      state.token.userInfo.urlLength = -1;
    },
  },
});
export default store;
