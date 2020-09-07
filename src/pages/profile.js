import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Profile(props) {

    function handleClick() {
        console.log("HAHA")
        props.changePage("/")
    }
    return (
        <>
            <div>
                Hai Profile
        </div>
            <button type="button" onClick={handleClick}>
                Go Home
            </button>
        </>
    );
}

export { Profile };