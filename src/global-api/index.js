import {mergeOptions} from '../util'
import initExtend from './extend'
export function initGlobalApi(Vue){
    Vue.options = {};
    Vue.mixin = function(mixin){
        this.options = mergeOptions(this.options,mixin)
    }
    Vue.options._base = Vue //_base 最终的Vue的构造函数保留在options对象中
    Vue.options.components = {}
    initExtend(Vue)
    Vue.component = function(id,definition){
        definition.name = definition.name || id
        definition = this.options._base.extend(definition)
        Vue.options.components[id] = definition
    }
    
} 