import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, limit, orderBy } from "firebase/firestore";
import { AddData } from './AddData';
import './resultados.css';
import { columnSearch, limitQuery, tableName } from '../constants/ColumnDefault';

function Combo() {
    const [showSuggest, setShowSuggest] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [pagina, setPagina] = useState(1);   
    const collection_ref = collection(db, tableName);
    const [textoSearch, setTextoSearch] = useState('');
        
    const search = (e) => {
        setShowSuggest(true);
        const texto = e.target.value;
        setTextoSearch(texto);
        buscarResultados(texto, pagina);
    }

    const handleSugerencia = () => {
        setShowSuggest(true);
        setTextoSearch('');
        buscarResultados('', pagina);
    }

    const handleCloseSuggest = () => {
        setShowSuggest(false);
    }

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            const paginaNext = pagina+1;
            setPagina(paginaNext);
            buscarResultados(textoSearch, paginaNext);
        }
    }

    function buscarResultados(text:string, pagina:number) {
        const q = columnSearch !== '' && text !== '' 
                ? query(collection_ref, where(columnSearch, "==", text), limit(pagina * limitQuery), orderBy('codigo', 'asc'))
                : query(collection_ref, limit(pagina * limitQuery), orderBy('codigo', 'asc'))

        onSnapshot(q, (querySnapshot) => {
            const nuevosResultados = querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));
            console.log('response firebase: ', nuevosResultados);
            setResultados(nuevosResultados);
        })
    }
 
    return (
        <>
        <section>            
                <h1 className='mb-3'>Busqueda</h1>   
                <div className='row'>   
                    <div className='col-md-10'>
                        <input
                            type="text"
                            placeholder={ 'Buscar por ' + columnSearch + ' ....' }
                            className="form-control"
                            onChange={search}
                            onClick={handleCloseSuggest}
                        />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={handleSugerencia}>Buscar Todos</button>
                    </div>   
                </div>
                <div className='row'>
                {
                    showSuggest && 
                    <div className="resultados mt-2 col-md-10" onScroll={handleScroll}  style={{overflowY: 'scroll', maxHeight: '300px'}}>   
                        <AddData />
                        {                        
                            resultados?.map((row,i)=>(
                                <p key={i}>
                                    Codigo: {row.data.codigo} / Nombre: {row.data.nombre} / Telefono: {row.data.telefono} / Razon Social: {row.data.razon_social} / NIT: {row.data.nit}
                                </p>
                            ))
                        }
                    </div>
                }
                </div>
                
        </section>

        </>
        
    )
}
 
export default Combo