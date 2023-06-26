import React from "react";

export type PreBuildStepProps = {
    build: () => void,
    change: () => void,
}

const PreBuildStep: React.FC<PreBuildStepProps> = (props) => {
    return (
        <>
            <button onClick={props.build}>Build new initial queue</button>
            <button onClick={props.change}>Change initial queue</button>
            <button>Close</button>
        </>
    )
}

export default PreBuildStep;