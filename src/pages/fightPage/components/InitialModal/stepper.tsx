import React, { useState } from "react";
import PreBuildStep from "./steps/PreBuildStep";
import BuildStep from "./steps/BuildStep";
import AddUserStep from "./steps/AddUserStep";
import { diceService } from "../../../../shared/services/diceService";


export type StepperProps = {
}

const Stepper: React.FC<StepperProps> = (props) => {
    const [stepIndex, setStep] = useState<number>(0);
    const nextStep = () => setStep(stepIndex + 1);
    const prevStep = () => setStep(stepIndex - 1);

    const steps = [
        <PreBuildStep
            build={() => {
                nextStep()
                diceService.startBuildInitiativeQueue();
            }}
            change={nextStep}/>,
        <BuildStep
            add={nextStep}
            onFirstStep={() => setStep(0)} />,
        <AddUserStep prevStep={prevStep} />
    ]
    return (
        <div style={{
            display: 'flex',
            gap: '12px'
        }}>
            {steps[stepIndex]}
        </div>
    )
}

export default Stepper;