import React from "react";
import CharactersTable from "./components/CharactersTable";
import { CharacterType } from "../../shared/types/Character";
import { CharacterClassEnum } from "../../shared/types/CharacterClass";

export const testCharacter: CharacterType = {
    name: "Test character",
    race: 'human',
    class: CharacterClassEnum.FIGHTER,
    health: {
        actualHp: 20,
        hpDice: {
            type: "dice",
            value: 10
        },
        maxHp: 20
    },
    armor: 14,
    masterity: 2,
}

const characters = [testCharacter]

const CharactersPage = () => {
    return <div>
        <CharactersTable data={characters}/>
    </div>
}

export default CharactersPage;