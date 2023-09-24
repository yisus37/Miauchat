import { Route, Routes } from "react-router-dom";
import PageAuth from "../Paginas/Auth/PageAuth";

export default function AuthRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<PageAuth/>} />
        </Routes>
    )
}

