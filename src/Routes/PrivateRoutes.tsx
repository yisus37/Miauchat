import { Route, Routes } from "react-router-dom";
import TemplateHome from "../Template/Entornos/TemplateHome";
import PageHomeChat from "../Paginas/HomeChat/PageHomeChat";

export default function PrivateRoutes(){
    return(
        <Routes>
            <Route path="/*" element={<RutasPrincipales/>} />
        </Routes>
    )
}

const RutasPrincipales=()=>{
    return(
        <TemplateHome>
            <Routes>
                <Route path="/" element={<PageHomeChat/>} />
            </Routes>
        </TemplateHome>
    )
}