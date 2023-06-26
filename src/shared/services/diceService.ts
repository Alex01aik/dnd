import { makeAutoObservable } from "mobx"

export type QueueItem = {
    name: string,
    value?: number
}

export class DiceService {
    public initiativeQueue: QueueItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    throwDice(diceNumber: number = 20, bonus: number = 0){
        return Math.floor(Math.random() * diceNumber) + 1 + bonus;
    }

    startBuildInitiativeQueue() {
        this.initiativeQueue = [];
    }

    addQueueItem(props: QueueItem) {
        if(props.value){
            this.initiativeQueue.push(props);
        }
        // TODO diceThrow

        this.initiativeQueue.sort((a, b) => (a.value ?? 0) < (b.value ?? 0) ? 1 : -1)
    }

    sortInitiative(){
        console.log('initiativeQueue', this.initiativeQueue);
    }
}

export const diceService = new DiceService()