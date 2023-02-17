import { createApp , reactive} from "vue";
import App from "./App.vue";
import  store  from "./store";
import router from "./router";
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import "./assets/main.css";
// const user = JSON.parse(localStorage.getItem('user') || '{}')
// app.config.globalProperties.$user = reactive(user)

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount("#app")
