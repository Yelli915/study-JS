class BookC{
    constructor(title, price){
        this.title = title;
        this.price = price;}
    buy(){
        console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
    }
}

const book1 = new BookC("ABCDE", 10000);
book1.buy();

class TextBookC extends BookC{
    constructor(title, price, major){
        super(title, price); //기존사용
        this.major = major; //새로운프로퍼티사용
    }
    buyTextBook(){
        console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
    }
}