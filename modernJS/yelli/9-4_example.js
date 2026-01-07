function Book(title, price){
    this.title = title;
    this.price = price;
}

Book.prototype.buy = function(){
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
}

const book1 = new Book("ABCDE", 10000);
book1.buy();

function TextBook(title, price, major){
    Book.call(this, title, price);
    this.major = major;
}

TextBook.prototype.buyTextBook = function(){
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
}

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();