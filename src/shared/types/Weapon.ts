import { DiceValueType } from "./Dice"

export type WeaponType = {
    name: string,
    attackBonus: number,
    damage: DiceValueType,
    damageBonus: number,
    inUse: boolean,
    isMaster: boolean
}