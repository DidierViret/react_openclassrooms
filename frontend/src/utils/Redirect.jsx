import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Redirect = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
}

export default Redirect;