import React from "react";
import { CharacterType } from "../../../../shared/types/Character";

export type FightersProps = {
    items: CharacterType[]
}

const Fighters: React.FC<FightersProps> = ({items}) => {
    return <div>
        {items.map((item, index) => <div key={index}>
            <div>{item.name ?? 'name'}</div>
            <div>{item.health.actualHp ?? 0}</div>
        </div>)}
    </div>
}

export default Fighters;