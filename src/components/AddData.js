import {useState} from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import {Modal} from 'react-bootstrap';

export const AddData = () => {
    const [codigo, setCodigo] = useState(0);
    const [nombre, setNombre] = useState('');
    const [nit, setNit] = useState(0);
    const [razonSocial, setRazonSocial] = useState('');
    const [telefono, setTelefono] = useState(0);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const addUsuario = async (e) => {
        e.preventDefault();       
        try {
            const docRef = await addDoc(collection(db, "usuario"), {
                codigo: codigo,    
                nombre: nombre,    
                nit: nit,    
                razonSocial: razonSocial,    
                telefono: telefono 
            });
            setShow(false);
            console.log("Agregado correctamente ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (   
        <>
            <p onClick={handleShow} style={{cursor: 'pointer'}}>
                Adicionar Usuario +
            </p>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Anadir Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form name='addTask'>
                    <div className="form-group mb-3">
                        <input 
                        type='number' 
                        name='codigo'
                        className='form-control'
                        onChange= { ({ target }) => setCodigo(parseInt(target.value)) }
                        value={ codigo }
                        min="0"
                        placeholder='Ingrese Codigo'/>
                    </div>
                    <div className="form-group mb-3">
                        <input 
                        type='text' 
                        name='nombre'
                        className='form-control'
                        onChange= { ({ target }) => setNombre(target.value) }
                        value={ nombre }
                        placeholder='Ingrese Nombre'/>
                    </div>
                    <div className="form-group mb-3">
                        <input 
                        type='text' 
                        name='razonSocial'
                        className='form-control'
                        onChange= { ({ target }) => setRazonSocial(target.value) }
                        value={ razonSocial }
                        placeholder='Ingrese Razon Social'/>
                    </div>
                    <div className="form-group mb-3">
                        <input 
                        type='number' 
                        name='nit'
                        className='form-control'
                        onChange= { ({ target }) => setNit(parseInt(target.value)) }
                        value={ nit }
                        min="0"
                        placeholder='Ingrese NIT'/>
                    </div>
                    <div className="form-group mb-3">
                        <input 
                        type='number' 
                        name='telefono'
                        className='form-control'
                        onChange= { ({ target }) => setTelefono(parseInt(target.value)) }
                        value={ telefono }
                        min="0"
                        placeholder='Ingrese Telefono'/>
                    </div>
                
                    <button className="btn btn-success" type='submit' onClick={addUsuario}>Guardar</button>
                </form>                
                </Modal.Body>        
            </Modal>
        </>
    )
}
