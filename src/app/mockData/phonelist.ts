export class PhoneList {
    list=[];
    constructor(){
        this.list = [
            {id:1, name:"iphoneX", company:"Apple", price:1000},
            {id:2, name:"Samsung Galaxy", company:"Samsung", price:800 },
            {id:3, name:"Nokia", company:"Nokia", price:600}
      
          ]
    }
    getList(){
        return this.list;
    }
}