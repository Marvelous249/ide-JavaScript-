class Stack {
    constructor() {
        this.items = []
    }
    number = 8

    pop(number){
        this.items.deletes(number)
    }

    push(number){
        this.items.insert(number)
    }

    insert(number) {
        for (let count = 0; count < this.items; count++) {
            if(this.items[count] === number) {this.items.add(number)}
        }
    }

    deletes(number) {
        for (let count = 0; count < this.items; count++) {
            if (this.items(count) === count) {
                this.items.remove()
            }
            return this.items.remove(number)
        }
    }

}
module.exports = Stack