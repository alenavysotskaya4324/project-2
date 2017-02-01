const Node = require('./node');

class LinkedList {
    constructor() {
		this._head=null;
		this._tail=null;
		this.length=0;
	}

    append(data) {
		var newNode = new Node;
		if (this.length===0) {
			newNode.data=data;
			this._head = newNode;
			this._tail = newNode;			
		}
		else {
			newNode.data=data;
			this._tail.next = newNode;
			newNode.prev = this._tail;
			this._tail = newNode;
		}
		
		this.length++;
		
		return this;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var currNode=this._head;
		var count=0;
		
		while(index<=this.length && index>=0) {
			if(count===index)
				return currNode.data;
			else {
				currNode=currNode.next;			
				count++;
			}
		}
		
		return null;

	}

    insertAt(index,data) {
		if (index > this.length) {
            return; 
        }
            
        var currNode = this._head;
		var count=0;
        while (count< this.length) {
            if (count == index) {              
                var prev = currNode.prev;
                var next = currNode;
                var newNode = new Node;
				newNode.data=data;
                prev.next = newNode;
                next.prev = newNode;
				this.length++;
		
				return this;
            }
            currNode = currNode.next;
			count++;
        }
	}

	isEmpty() {
		if (this.length===0) {			
			return true;
		}
		else {
			return false;
		}
	}

    clear() {
		
		this._head = new Node;
		this._tail = new Node;
		this.length=0;
		
		return this;
	}

    deleteAt(index) {
		if ( index > this.length - 1 || index < 0 ) {
            return this;
        }
         
        var currNode = this._head;
        var count = 0;
         
        if (index ===0) {
            this._head = this._head.next;
			
			if (this._head===null) 
				this._tail = null;
			else 
				this._head.prev=null;
        }
        else if (index == this.length-1) {
            currNode = this._tail;
            this._tail = currNode.prev;
            this._tail.next = null;
        }
        else {
            while (count < index) {
                currNode = currNode.next;
				count++;
            }           
            currNode.prev.next = currNode.next;
        }
         
        this.length--;
		
		return this;
	}

    reverse() {

		var currNode = this._head;
        var prev, next;
        while (currNode ) {
            prev = currNode.prev;
            next = currNode.next;
            currNode.prev = next;
            currNode.next = prev;
            currNode = next;
        }
        prev = this._head;
        this._head = this._tail;
        this._tail = prev; 
		
        return this;
	}

    indexOf(data) {
		
		var currNode=this._head;
		var count=0;
		
		while (currNode && count<=this.length) {
			if(data===currNode.data)
				return count;
			else {
				currNode=currNode.next;
				count++;
			}
		}
		
		return -1;
	}
	
};

module.exports = LinkedList;
