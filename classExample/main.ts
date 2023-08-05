import { Book } from "./book";
import { Magazine } from "./magazine";
import { Shelf } from "./shelf";
import { Student } from "./student";

const bookShelf=new Shelf<Book>();
bookShelf.addItemToCatalogue(new Book()) //it wont accept Magazine Objects
bookShelf.checkout<Book>(new Book()) //The function accepts only parameters of type Book becase you
//have specified <Book> after the function name. In absence of that, it will accept any paramter.
bookShelf.checkoutV2<Book,Student>(new Book(),new Student())

const magazineShelf=new Shelf<Magazine>();
magazineShelf.addItemToCatalogue(new Magazine()); //it wont accept Book Objects
magazineShelf.checkout<Magazine>(new Magazine())//The function accepts only parameters of type Magazine becase you
//have specified <Magazine> after the function name. In absence of that, it will accept any paramter.
magazineShelf.checkoutV2<Magazine,Student>(new Magazine(),new Student())


/*
Instead of creating 2 seperate classes BookShelf and MagaxineShelf for executing the
same code for different entities :books and magazines.
We create a generic class Shelf which accepts any type T.
We create different types of objects for the class Shelf i.e book type and magazine type objects.

*/
