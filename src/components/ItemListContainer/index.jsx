import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import React, { useEffect, useState } from "react";
import Title from '../Title'

const films = [
    {id: 1, image: "http://static-1.ivoox.com/audios/9/3/6/8/641501138639_LG.jpg", title:"La comunidad del anillo"},
    {id: 2, image: "http://static-1.ivoox.com/audios/2/4/7/8/9571501138742_LG.jpg", title: "Las dos torres"},
    {id: 3, image: "http://static-1.ivoox.com/audios/4/4/1/6/4441572616144_LG.jpg", title: "El retorno del rey"}
]; 


export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films)
            }, 3000);
        });
        getData.then(res => setData(res));
        

    }, [])


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return ( 
            <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
            </>
            
     );
}
 
export default ItemListContainer;