class QueueNode<T> {
    value: T;
    prev?: QueueNode<T>;
constructor(value: T) {
    this.value = value;
};
}

export class Queue<T> {
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;
    public length = 0;
    enqueue(item: T) {
        const node = new QueueNode(item);
        
        this.length++;

        if(!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.prev = node;
        this.tail = node;
    }
    dequeue(): T | undefined {
        if(!this.head) {
            return
        }
        this.length--;
        const node = this.head;

        if(this.length === 0) {
            this.head = this.tail = undefined;
        } else {
            this.head = this.head.prev;
        }

        return node.value; 
        
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}