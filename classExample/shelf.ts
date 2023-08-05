export class Shelf<T>{

    _items:T[]=[];

    addItemToCatalogue(item:T){

    }

    removeItemFromCatalogue(item:T){

    }

    checkout<T>(item:T):T{
        return item;
        /*
This function will accept first paramter of type T only because of the <T> after the function name
This function will return a variable of type T only.
Other paramters can be of any other type.

        */
    }

    checkoutV2<T,V>(item:T,customer:V):T{
        return item;
        /*
This function accepts first 2 paramters of type T and V only due to <T,V> after the function name.
It returns a variable of type T only.
Other paramters can be of any other type.

        */
    }

}