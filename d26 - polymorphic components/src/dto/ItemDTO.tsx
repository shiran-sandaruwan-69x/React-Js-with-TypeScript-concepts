import OrderDTO from "./OrderDTO";

export default interface ItemDTO{
    itemId:string,
    itemName:string
    orderDTO:OrderDTO[]
}