class LinkedList {

    node = new Node()

    // Temp node
    currentNode = this.node
    numberOfNodes = 0

    returnList() {
        return this.node
    }

    returnCurrentNode() {
        return this.currentNode
    }

    // Methods
    append(value) {
        if (this.currentNode.value == null) {
            this.currentNode.value = value
            this.currentNode.nextNode = new Node()
        } else {
            this.currentNode = this.currentNode.nextNode
            return this.append(value)
        }
        // Returns to the start of the list for next operations
        this.currentNode = this.node
    }

    prepend(value) {
        const newNode = new Node()
        newNode.value = value
        newNode.nextNode = this.currentNode
        this.node = newNode
        // Returns to the start of the list for next operations
        this.currentNode = this.node
    }

    // Uses iterative method rather than recursive as the list isn't getting
    // modified unlike append() & prepend()
    size() {
        let nodeToCheck = this.node
        let count = 0;

        while (nodeToCheck.value != null) {
            count++
            nodeToCheck = nodeToCheck.nextNode
        }
        return count
    }

    head() {
        return this.node.value
    }

    tail() {
        let nodeToCheck = this.node
        let tail
        while (nodeToCheck.value != null) {
            if (nodeToCheck.nextNode.value == null) {
                tail = nodeToCheck.value
            }
            nodeToCheck = nodeToCheck.nextNode
        }
        return tail
    }

    at(index) {
        let size = this.size()
        let nodeToCheck = this.node
        if (index <= size - 1) {
            for (let i = 0; i < index; i++) {
                nodeToCheck = nodeToCheck.nextNode
            }
        } else {
            return undefined
        }
        return nodeToCheck
    }

    pop() {
        let nodeToCheck = this.node
        while (nodeToCheck.value != null) {
            if (nodeToCheck.nextNode.value == null) {
                nodeToCheck.value = null
                nodeToCheck.nextNode = null
            } else {
                nodeToCheck = nodeToCheck.nextNode
            }
        }
    }

    contains(value) {
        let nodeToCheck = this.node
        while (nodeToCheck.value != null) {
            if (nodeToCheck.value == value) {
                return true
            } else if (nodeToCheck.value != value && nodeToCheck.nextNode.value != null) {
                nodeToCheck = nodeToCheck.nextNode
            } else {
                return false
            }
        }
    }

    find(value) {
        let nodeToCheck = this.node
        let index = 0
        while (nodeToCheck.value != null) {
            if (nodeToCheck.value == value) {
                return index
            } else if (nodeToCheck.value != value && nodeToCheck.nextNode.value != null) {
                nodeToCheck = nodeToCheck.nextNode
                index++
            } else {
                return null
            }
        }
    }

    toString() {
        // need to intialise empty string like below otherwise undefined shows at the
        // start
        let string = '';
        let nodeToCheck = this.node 
        while (nodeToCheck.value != null) {
            string += ` ( ${nodeToCheck.value} ) ->`
            nodeToCheck = nodeToCheck.nextNode
        }
        string += ` ${nodeToCheck.value} `
        return string
    }

    insertAt(value, index) {
        let nextNodes = this.node.nextNode
        let size = this.size()
        let nodeToInsertAt = this.node
        if (index == 0) {
            this.prepend(value)
        }
        if (index > 0 && index <= size) {
            for (let i = 0; i < index - 1; i++) {
                nodeToInsertAt = nodeToInsertAt.nextNode
                nextNodes = nextNodes.nextNode
            }
            const newNode = new Node()
            newNode.value = value
            newNode.nextNode = nextNodes
            nodeToInsertAt.nextNode = newNode
        } else {
            return 'Index greater than length of nodes'
        }
    }

    removeAt(index) {
        let nextNodes = this.node.nextNode
        let size = this.size()
        let nodeToRemoveAt = this.node
        if (index < size) {
            for (let i = 0; i < index; i++) {
                nodeToRemoveAt = nodeToRemoveAt.nextNode
                nextNodes = nextNodes.nextNode
            }
            nodeToRemoveAt.value = nextNodes.value
            nodeToRemoveAt.nextNode = nextNodes.nextNode
        } else {
            return 'Index greater than length of nodes'
        }
    }
}

class Node {
    value = null
    nextNode = null
}

const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.returnList())
console.log(list.toString())