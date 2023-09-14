import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/home/*" element={<PrivateRoutes />} />
        </Routes>
    )
}