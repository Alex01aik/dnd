import React from "react";
import './styles.css';
import Fighters from "./components/Firghters";
import AttackModal from "./components/AttackModal";
import { testCharacter } from "../charactersPage";
import { CharacterType } from "../../shared/types/Character";
import InitialModal from "./components/InitialModal";

const leftFighters: CharacterType[] = [
    testCharacter
]
const rightFighters: CharacterType[] = [
    testCharacter
]

const FightPage = () => {
    return (
    <>
        <InitialModal />
        {/* <AttackModal />
        <div className="area">
            <div className="left">
                <Fighters items={leftFighters} />
            </div>
            <div className="right">
                <Fighters items={rightFighters} />
            </div>
        </div> */}
    </>)
}

export default FightPage;