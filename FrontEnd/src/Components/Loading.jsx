import { ThreeDot } from "react-loading-indicators";
import React from "react";
import "../styles/Loading.css";
export default function Loading() {
    return (
        <div className="loading">
            <ThreeDot variant="bounce" color="#1e1f1e" size="large" text="Cargando" textColor="#0c0606" />        
        </div>
    )
}