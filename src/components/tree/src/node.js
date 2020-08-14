let nodeIdSeed = 0

export default class Node {
    constructor(options) {
        this.id = nodeIdSeed++
        this.text = null
        this.checked = false
        
    }

    doCreateChildren() {

    }
}