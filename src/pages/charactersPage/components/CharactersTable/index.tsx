import React from "react";
import { CharacterType } from "../../../../shared/types/Character";

export type CharactersTableProps = {
    data: CharacterType[]
}

const CharactersTable: React.FC<CharactersTableProps> = (props) => {
    return <div>
        {props.data.map(item => <div>{item.name}</div>)}
    </div>
}

export default CharactersTable;