import React from "react";
import Card from "./Card";
import "./style.css";

function Solution() {
    return (
        <div className="solutions">
            <div className="flex flex-wrap -m-3">
                <Card imageUrl="./assets/images/technical_solution.webp" title="Technical solution" content="Cutting-Edge Technologies and Methodologies for Seamless Integration and Performance Optimization." />
                <Card imageUrl="./assets/images/software.jpg" title="Software" content="Leveraging Advanced Algorithms, Machine Learning, and AI-driven Solutions for Enhanced Performance, Intelligent Automation, and Adaptive Functionality, Tailored to Your Unique Business Needs." />
                <Card imageUrl="./assets/images/hardware.webp" title="Hardware" content="Empowering Your Infrastructure with State-of-the-Art Components, High-performance Servers, Robust Networking Equipment, and Scalable Storage Solutions, Engineered to Meet the Demands of Modern Computing Environments and Drive Business Success." />
            </div>
        </div>
    );
}

export default Solution;
