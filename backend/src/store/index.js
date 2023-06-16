import { createStore } from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    state: {
        user: {
            // token: sessionStorage.getItem('TOKEN'),
            token: '123',
            data: {},
        },
    },
    getters: {},
    actions,
    mutations,
});

export default store;
