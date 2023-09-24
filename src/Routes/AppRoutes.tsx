import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/home/*" element={<PrivateRoutes />} />
            <Route path="/auth/*" element={<AuthRoutes/>}/>
        </Routes>
    )
}