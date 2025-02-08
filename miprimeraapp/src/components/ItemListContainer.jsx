import React from 'react';
import getAsyncData, { getAsyncDataByCategory } from '../data/database';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {catid} = useParams()

  useEffect(()=>{
    if(catid === undefined){
      const respuestaPromise = getAsyncData();
      respuestaPromise.then(respuesta => setProducts(respuesta) );
    }
    else{
      const respuestaPromise = getAsyncDataByCategory(catid);
      respuestaPromise.then(respuesta => setProducts(respuesta) );
    }

  },[catid])


  return (
    <div>
      <img src="banner.png" style={{width: "100%" , height:"500px",borderRadius:"20px", paddingBottom:"20px"}} />
      <ItemList products={products}></ItemList>
    </div>
  );
}

export default ItemListContainer;

