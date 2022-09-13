import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {

  const [descripcion, setdescripcion] = useState('')
  const [stock, setstock] = useState(1)
  const navigate = useNavigate()

  const productscolletion=collection(db,"products")
  const store=async(e) => {
    e.preventDefault()
    await addDoc(productscolletion,{descripcion: descripcion,stock:stock})
    navigate("/")
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h1>Crear Producto</h1>
          <form onSubmit={store} >
            <div className="mb-3">
              <label classname="form-label" >Descripción</label>
              <input required type="text" className='form-control' value={descripcion} onChange={(e)=>setdescripcion(e.target.value)} />
            </div>
            <div className="mb-3">
              <label  className="form-label">Stock</label>
              <input required min="1" type="number" className='form-control'onChange={(e)=>setstock(e.target.value)}  value={stock}/>
            </div>
            <button type='submit' className='btn btn-success'>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create