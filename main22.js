
//1
function Car(brand, age) {
    	
	this.brand = brand;
	this.age = age;

    this.getBrand = function() {
		return brand[0].toUpperCase() + brand.slice(1);
	}
	
	this.getAge = function() {
		new Date();
		let date = new Date();
		let yearNow = date.getFullYear();
		return yearNow - age;  
	}
}

let lexus = new Car('lexus', 2);
lexus.getBrand();
lexus.getAge();

//2
function Handler(string) {  
	let str = string;

	this.getString = function() {
		return str;
	}

	this.getInvert = function() {
		let invertStr = '';
		for (i = str.length - 1; i >= 0; i--) {
			invertStr += str[i];
		}
		return invertStr;
	}

	this.getDelete = function() {
		return str = '';
	}
}

const result = new Handler('tseb eht ma i');
console.log(result.getString());
result.getString()
result.getInvert();
result.getDelete();



//3
function minus(num1 = 0) {
    return function (num2 = 0) {
        return num1 - num2;
    }
}
minus(10)(6);
minus(5)(6);
minus(10)(0);
minus()(6);
minus()();



//4
function MultiplayMaker(num1) {
   	let numRes = num1;	
    this.getNum1 = function(num2 = 0) {
        return numRes * num2;
    }
}

const multiplay = MultiplayMaker(2);
multiplay(2);
multiplay(1);
multiplay(3);
multiplay(10);

//5
const module = (function() {
	const str = 'tseb eht ma i';

	function setStr(str = '') {
		myStr = String(str);
	}

	function getStr() {
		return str;
	}

	function detLength() {
		return str.length;
	}

	function getInvert() {
		let invertStr = '';
		for (i = str.length - 1; i >= 0; i--) {
			invertStr += str[i];
		}
			return invertStr;
	}
    return {
        setStr, getStr, detLength, getInvert
    }
})();
