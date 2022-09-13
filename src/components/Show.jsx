import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection,getDocs,getDoc,deleteDoc,doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal= withReactContent(Swal)
 
const Show = () => {

    const [products, setproducts] = useState([])

    const productsCollection=collection(db,"products")

    const getProducts = async ()=>{
        const data = await getDocs(productsCollection)
     
        setproducts(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        console.log(data.docs)
    }

    const deleteProduct = async (id)=>{ 
        const producDoc= doc(db,"products",id)
        await deleteDoc(producDoc)
        getProducts()
    }

    useEffect(() => {
      getProducts()
    }, [])
    

  return (
    <>

        <div className="container mw-100 ">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to="/create" className='btn btn-secondary mt-2 mb-2' >Create</Link>
                    </div>

                    <table className='table table-dark table-hover '>
                        <thead>
                            <tr>
                                <th>Descipcion</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((product)=>(
                                    <tr key={product.id}>
                                        <td>{product.descripcion}</td>
                                        <td>{product.stock}</td>
                                        <td>
                                            <Link to={`/edit/${product.id}`} className="btn btn-light">Editar</Link>
                                            <button onClick={()=>deleteProduct(product.id)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>



                </div>
            </div>
        </div>
    </>
  )
}

export default Show