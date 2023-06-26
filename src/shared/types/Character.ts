import { CharacterClassEnum } from "./CharacterClass"
import { DiceValueType } from "./Dice"
import { CharacterParamType, CharacterSkillType } from "./Skill"
import { WeaponType } from "./Weapon"

export type CharacterType = {
    name: string,
    class: CharacterClassEnum,
    race: string, //TODO
    armor: number,
    masterity: number,
    inspiritation?: boolean,
    health: HealthType,
    params?: CharacterParamType[],
    skills?: CharacterSkillType[],
    weapons?: WeaponType[],
    speed?: number,
}

export type HealthType = {
    maxHp: number,
    actualHp: number,
    hpDice: DiceValueType,
}
