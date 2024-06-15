import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

function Loading() {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4A90E2" loading={true} css={override} size={35} />
        </div>  
    );
}

export default Loading;
