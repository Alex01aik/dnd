import React from "react";
import './styles.css'
import { attackModalModel } from "./model";
import { diceService } from "../../../../shared/services/diceService";

export type AttackModalProps = {
}

const AttackModal: React.FC<AttackModalProps> = (props) => {
    return <div className="attackModal">
        <button onClick={() => console.log(diceService.throwDice())}>Attack</button>
    </div>
}

export default AttackModal;