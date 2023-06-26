import React, { useState } from "react";
import { diceService } from "../../../../../../shared/services/diceService";

export type AddUserStepProps = {
    prevStep: () => void
}

const AddUserStep: React.FC<AddUserStepProps> = (props) => {
    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<number>();
    return (
        <>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <div>
                    <label>Dice value</label>
                    <input type='number' value={value} onChange={(e) => setValue(Number(e.target.value))} />
                </div>
                <div>
                    <button onClick={() => setValue(diceService.throwDice())}>Throw dice</button>
                </div>
            </div>
            <button onClick={() => {
                diceService.addQueueItem({
                    name,
                    value,
                })
                props.prevStep()
            }}>Add</button>
        </>
    )
}

export default AddUserStep;