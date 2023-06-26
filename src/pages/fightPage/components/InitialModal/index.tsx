import React from "react";
import Stepper from "./stepper";
import { diceService } from "../../../../shared/services/diceService";
import { observer } from "mobx-react-lite";

export type InitialModalProps = {
}

const InitialModal: React.FC<InitialModalProps> = (props) => {
    return (
        <div>
            <Stepper />
            <div>
                {diceService.initiativeQueue.map((item, index) => <div key={index}>
                        {item.name}{' '}
                        {item.value}
                    </div>)}
            </div>
        </div>
    )
}

export default observer(InitialModal);