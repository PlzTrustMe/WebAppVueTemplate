import {createApp} from "vue";
import {router, store} from "@/app/providers";
import App from "@/app/App.vue";
import "./style/style.css"

export const app = createApp(App).use(router).use(store)
