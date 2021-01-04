"use strict";
/*
Användare bestämmer antalet böcker
Användare matar in bokens namn, ämne, sidor, ISBN
Skriv ut alla böcker
*/

function Book(name, topic, pages, nrISBN) {
    this.name = name;
    this.topic = topic;
    this.pages = pages;
    this.nrISBN = nrISBN;
    this.getBookInfo = function () {
        console.log(
            "Name:  " + this.name + "\n" +
            "Topic: " + this.topic + "\n" +
            "Pages: " + this.pages + "\n" +
            "ISBN:  " + this.nrISBN + "\n" +
            "-----\n"
        );
    }
}

let books = [];
let bookCount = prompt("3 books are in the library. Add more if you want\nHow many books?", "3");
let debug = false; //Sätt true för snabbare program

if (!debug) {
    //Med prompt, använd enter istället för OK knapp
    books.push(new Book(prompt("Enter name", "book1"), prompt("Enter topic", "topic1"), prompt("Enter pages", "200"), prompt("Enter ISBN", "12345")));
    books.push(new Book(prompt("Enter name", "book2"), prompt("Enter topic", "topic2"), prompt("Enter pages", "300"), prompt("Enter ISBN", "11111")));
    books.push(new Book(prompt("Enter name", "book3"), prompt("Enter topic", "topic3"), prompt("Enter pages", "400"), prompt("Enter ISBN", "22222")));
} else {
    //För snabbt test:
    books.push(new Book("book1", "topic1", 200, 12345));
    books.push(new Book("book2", "topic2", 300, 11111));
    books.push(new Book("book3", "topic3", 400, 22222));
}

while(bookCount > books.length){
    books.push(new Book(prompt("Enter name"), prompt("Enter topic"), prompt("Enter pages"), prompt("Enter ISBN")));
}

//##forEach##
books.forEach(Book => {                                
    Book.getBookInfo();
});

//##Vanlig for loop##
// for (let i = 0; i < books.length; i++) {             
//     books[i].getBookInfo();
// }

//##for-in loop##
// for (let i in books){                                
//     books[i].getBookInfo();
// }

