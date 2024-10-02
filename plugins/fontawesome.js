import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas, faCircleQuestion, faPlus } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, faCircleQuestion, faPlus)

export default defineNuxtPlugin((nuxtApp) =>{
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
