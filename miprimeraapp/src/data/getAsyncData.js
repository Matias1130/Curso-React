import products from "./data"

function getAsyncData(){

    const promiseData = new Promise((resolve,reject) =>{
        const errorFatal = false

        setTimeout(()=>{
            if (errorFatal) reject("Error al cargar")
            console.log("carga de datos Exitosa")
            resolve(products)
        },1200)
        console.log("Simulacion de carga de datos comenzada")
    })
    return promiseData;
}



export function getAsyncDataById(id) {
    const promiseData = new Promise((resolve, reject) => {
      const errorFatal = false;
  
      setTimeout(() => {
        if (errorFatal) reject("Error al cargar");
        

        const product = products.find(item => item.id === id);
  
        if (!product) {
          reject("Producto no encontrado");
        } else {
          console.log("Carga de datos exitosa");
          resolve(product);
        }
      }, 1200);
      console.log("Simulación de carga de datos comenzada");
    });
    return promiseData;
  }

  export function getAsyncDataByCategory(catID) {
    const promiseData = new Promise((resolve, reject) => {
      const errorFatal = false;
  
      setTimeout(() => {
        if (errorFatal) reject("Error al cargar");
        

        const product = products.filter(item => item.category.toLowerCase() === catID.toLowerCase());
  
        if (!product) {
          reject("Producto no encontrado");
        } else {
          console.log("Carga de datos exitosa");
          resolve(product);
        }
      }, 1200);
      console.log("Simulación de carga de datos comenzada");
    });
    return promiseData;
  }
export default getAsyncData;
