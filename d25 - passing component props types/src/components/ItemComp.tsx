import React from 'react';
import ItemDTO from "../dto/ItemDTO";

interface MyProps{
    itemDtoId:string
    isLoginComp:boolean
    itemDtoName:string
    itemDTO:ItemDTO[]
    itemSave:()=> any
}

class ItemComp extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);

    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ItemComp;