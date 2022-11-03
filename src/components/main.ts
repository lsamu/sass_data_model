import Toolbar from './toolbar/index.vue'
import Toolbox from './toolbox/index.vue'

const install = function (Vue, opts = {}) {
    Vue.component("box-editor-toolbar", Toolbar)
    Vue.component("box-editor-toolbox", Toolbox)
}

export default {
    install
}