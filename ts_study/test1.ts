/** typescript 다운 및 실행파일 설치
 *  
 * [typescipt 설치]
 * npm install typescript
 * 
 * [typescript 실행파일 설치]
 * npm i -g ts-node
 * npm i -g typescript
 * npm i -D tslib @types/node
 * */ 

/**
 * typescript 변수 선언
 */
let userName: string = "park";
userName = "kim";
console.log(userName);



// typescript에서는 숫자형은 정수와 실수를 구분하지 않는다.
// 따라서 아래와 같이 실수형을 선언해도 정수형으로 인식된다.
let integer: number = 1.1;
console.log(integer);

let integer2: number = 1;

let age: number = 20;
age = 30;
console.log(age);
 
// javascript에서는 타입이 동적으로 바뀌기 때문에 정상적으로 되지만
// typescript에서는 타입이 정적이기 때문에 아래와 같은 상황은 에러가 발생한다.
// age = "30";
// console.log(age);


let isMarried: boolean = false;
isMarried = true;
console.log(isMarried);

// any 타입은 모든 타입을 허용한다.
// 기존의 javascript와 동일하게 사용이 가능하다.
// 하지만 타입스크립트의 장점인 타입체크를 무시하게 된다.
// 따라서 사용을 지양하는 것이 좋다.
let test: any = 10;
console.log(test);
test = "heelo";
console.log(test);

let test2: unknown = 20;
console.log(test2);
test2 = "hellos" + 10;
console.log(test2);

// 문자열은 작은 따옴표(')와 큰 따옴표(")로 둘러싸인 문자열이다.
// 작은 따옴표와 큰 따옴표는 동일하게 사용된다.
let red: string = 'red';

let green: string = "green";
let yourColor: string = 'your color is' + green;

// ES6부터는 템플릿 리터럴을 사용하여 문자열을 선언할 수 있다.
// 템플릿 리터럴은 백틱(`)으로 둘러싸인 문자열이다.
let myColor: string = `my color is ${red} and ${green}`;
console.log(myColor);


/**
 * typescript 배열 과 객체
 */

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["kim" , "park", "lee"];
let mixed: (number | string)[] = [1, "2", 3, "4", 5];

console.log(numbers);
console.log(names);
console.log(mixed);

console.log(numbers[0]);
console.log(names[0]);
console.log(mixed[1]);

// 객체는 key와 value로 이루어져 있다.
let user: {name: string; age: number} = {
    name: "kim",
    age: 20
};

console.log("user name : " + user.name);
console.log("user age : " + user.age);


/** 
 * typescript 함수
*/
function add(x: number, y: number): number {
    return x + y;
}

function getName(name: string): string {
    return "hello, " + name;
}

function getName2(name: string, age: number): string {
    return "hello, " + name + "my age is " + age;
}

console.log("func1 : " + add(1,2));
console.log("func2 : " + getName("kim"));
console.log("func3 : " + getName2("park" , 20));


/**
 * typescript 화살표 함수
 */
const add2 = (x: number, y: number): number => {
    return x + y;
}

const getName3 = (name: string): string => {
    return "hello," + name;
}

const voidFunc = (): void => {
    console.log("void function");
}

console.log("arrow func1 : " + add2(1, 2));
console.log("arrow func2 : " + getName3("park"));
console.log(voidFunc());

/**
 * typescript 제네릭
 */
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["kim", "park", "lee"]);
let boolArray = getArray<boolean>([true, false, true]);




/** 
 * typescript 인터페이스 
 */

interface User {
    getName(): string;
    getAge(): number;
    toString(): string;
}

// 인터페이스를 구현한 클래스는 반드시 인터페이스의 모든 속성과 메소드를 구현해야 한다.
class Park implements User {
    private name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    toString() : string {
        return "name : " + this.name + ", age : " + this.age;
    }
}

class Lee implements User {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    toString() : string {
        return "name : " + this.name + ", age : " + this.age;
    }
}

class Person {
    name: string;
    age: number;
    constructor(name: string , age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
}

