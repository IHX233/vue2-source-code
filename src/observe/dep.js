class Dep{
    constructor(){
        this.subs = []
    }
    depend(){
        this.subs.push(Dep.target)
    }
    notify(){
        this.subs.forEach(watcher=>watcher.update())
    }
}
Dep.target = null
export function pushTarget(watcher){
    Dep.target = watcher
}
export function popTarget(){
    Dep.target = null
}
export default Dep
//多对多的关系，一个属性有一个dep来收集watcher
//dep可以存多个watch
//一个watch可以对应多个dep