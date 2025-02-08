import {getAsyncDataById} from "../data/database"
import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "./Loader";


function ItemDetailContainer() {
    const {id} = useParams();

    const [itemInfo ,setItemInfo] = useState(null)

    useEffect(()=>{
        async function getItemData() {
            const response = await getAsyncDataById(id)
            setItemInfo(response)
        }
        getItemData()
    },[id]);
    if (itemInfo)
      return (
        <div>
          <ItemDetail {... itemInfo} id={id}></ItemDetail>
        </div>
      )
    else
      return <Loader/>
}

export default ItemDetailContainer
