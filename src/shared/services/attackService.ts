import { diceService } from "./diceService";

export class AttackService {
    // attack(weaponValue: number, isMaster?: boolean, bonus?: number){
    //     const hit = diceService.throwDice(20, bonus);
    //     if(hit){
    //         console.log('hit');
    //         const damage = diceService.throwDice(weaponValue, bonus);
    //     }
    // }
}

export const attackService = new AttackService()