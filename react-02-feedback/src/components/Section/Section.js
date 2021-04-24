import React from "react";

function Section({ title, children }) {
    const s={
        padding:10
    }
    return (
        <>
            <h2 style = {s}>{title}</h2>
            <div>{children}</div>
        </>
    );
}

export default Section;