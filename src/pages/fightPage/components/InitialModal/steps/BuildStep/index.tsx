import React from "react";

export type BuildStepProps = {
    add: () => void,
    onFirstStep: () => void,
}

const BuildStep: React.FC<BuildStepProps> = (props) => {
    return (
        <>
            <button onClick={props.add}>Add user</button>
            <button onClick={props.onFirstStep}>Finish build</button>
        </>
    )
}

export default BuildStep;