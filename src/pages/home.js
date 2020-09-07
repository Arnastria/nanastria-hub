import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {


    function handleClick() {
        console.log("HAHA")
        props.changePage("/profile")
    }
    return (
        <>
            <div>
                Hai Home
        </div>
            <button type="button" onClick={handleClick}>
                Go Profile
            </button>
        </>
    );
}

export { Home };