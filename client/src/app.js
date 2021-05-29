import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPostsA } from './action';
import FormPage from './components/form';
import Lists from './components/lists';
import Sign from './components/auth';
const App = () => {
    const [idCurrent,setIdCurrent] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsA())
    }, [dispatch])
    return (
        <>
            <FormPage idCurrent={idCurrent} setIdCurrent={setIdCurrent} />
            <Lists setIdCurrent={setIdCurrent}/>
            <Sign/>
        </>
    )
}
export default App;