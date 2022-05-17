import React from "react";
import { useAuth } from "../contexts/authContext";

const Dashboard = () => {
    const {currentUser} = useAuth()
    return <p>{currentUser && JSON.stringify(currentUser)}</p>
}

export default Dashboard