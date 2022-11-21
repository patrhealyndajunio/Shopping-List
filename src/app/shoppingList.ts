export class Item {
    constructor(
        public itemID: number,
        public itemName: string = '',
        public itemDescription: String = '',
        public itemQuantity: number = 0,
        public itemPrice: number = 0
    ) { }
}