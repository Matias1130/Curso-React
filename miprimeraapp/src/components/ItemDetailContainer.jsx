import {getAsyncDataById} from "../data/getAsyncData"
import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


function ItemDetailContainer() {
    const {id} = useParams();

    const [itemInfo ,setItemInfo] = useState({})

    useEffect(()=>{
        async function getItemData() {
            const response = await getAsyncDataById(id)
            setItemInfo(response)
        }
        getItemData()
    },[id])
    console.log(itemInfo)

  return (
    <div>
      <ItemDetail {... itemInfo}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer
