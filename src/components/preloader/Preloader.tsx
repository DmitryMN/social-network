import React from "react";
import PreloderImg from "../../images/Spinner.svg"

const Preloader = () => {
    return(
        <div>
            <img src={PreloderImg} alt="preloader" />
        </div>
    );
}

export default Preloader;