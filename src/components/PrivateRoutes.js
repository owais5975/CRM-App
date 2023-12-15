import { Outlet, Navigate } from 'react-router-dom'
import storageHelper from "../helpers/storageHelper"

const PrivateRoutes = () => {
    const isAuthorozed = () => {
        const token  = storageHelper.getItem("Token")
        if (token)
            return true
        return false
    }

    return (
        isAuthorozed() ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes