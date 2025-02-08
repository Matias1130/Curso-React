import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs, doc , getDoc,query,where,setDoc, addDoc, writeBatch} from "firebase/firestore"
import products from "./data"
const firebaseConfig = {
  apiKey: "AIzaSyABaRpa16sGD9fVXydsyfZ_OoYfcbrzRRM",
  authDomain: "ecommerce-react-3f2b2.firebaseapp.com",
  projectId: "ecommerce-react-3f2b2",
  storageBucket: "ecommerce-react-3f2b2.firebasestorage.app",
  messagingSenderId: "402615974717",
  appId: "1:402615974717:web:ecb8a6db3f79d4edd26354"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function getAsyncData(){
    const collectionRef = collection(db,"products")
    const productsSnapshot = await getDocs(collectionRef)
    const documentsData = productsSnapshot.docs.map( doc => {
        return {...doc.data(),id: doc.id}
    })
    return documentsData;
}


export async function getAsyncDataById(id) {
    const docRef = doc(db,"products",id)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    return docData;

}


export async function getAsyncDataByCategory(catID) {
    const productsColRef = collection(db,"products");
    const q = query(productsColRef,where("category","==",catID));

    const productsSnapshot = await getDocs(q)
    const documentsData = productsSnapshot.docs.map( doc => {
        return {...doc.data(),id: doc.id}
    })
    return documentsData;
  }

export async function exportProductsWithBatch() {
    const batch = writeBatch(db)
    for(let item of products){
        const itemid = item.id;
        delete item.id
        const newDoc = doc(db,"products",itemid)
        batch.set(newDoc,item)
    }
    await batch.commit()
}

export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db,"orders"),orderData);
    return newOrderDoc.id
}