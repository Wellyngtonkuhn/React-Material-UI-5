import { Button } from '@mui/material'
import { Routes, Route} from 'react-router-dom'



export default function AppRoutes(){

    return(
        <>
        <Routes>

            <Route path='/' element={<Button variant='contained' color='primary'>Tetse</Button>} />
        </Routes>


        </>
    )
}