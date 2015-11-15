/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
var head = null;
var tail = null;
var length = 0;
var newNode;
var current;
	return {
		getHead: function (){
			return head;
		},

		getTail: function (){
			return tail;
		},
		
		add: function (value){
			var newNode = {
				value: value,
				next: null
			};
			if(head === null){
				head = newNode;
				tail = head;
			}else{				
				tail.next = newNode;
				tail = newNode;
			}
			length++;
			return newNode;
		},

		get: function (index){
			current = head;
			if(index < 0){
				return false;
			}
			for(var i=0; i < length; i++){
				if (index === i){
					return current;
				}
				if(current.next === null){
					return false;
				}			
				current = current.next;
				if(index === i){
					return current;
				}
			}
				return current;
		},

		remove: function (index){
			var current = this.get(index);
			var previous = this.get(index-1);
			var after = this.get(index+1) || null;


			if(this.get(index) === false){
				return false;
			}
			if(!current) {
				return false;
			}
			if(!after){
					previous.next = null;
				return;
			}
			if(!previous){
				after.next = null;
				head = after;
			}
			
			previous.next = after;
			current.next = null;
			tail = this.getTail();
			return current;
		},

		insert: function (){

		}	
	};

}			
