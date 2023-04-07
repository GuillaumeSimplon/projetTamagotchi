import { Character } from "./Character";

export class Human extends Character {
    repair: number

    constructor(name: string, radiationLevel: number, stressLevel: number, repair: number) {
        super(name, radiationLevel, stressLevel)
        this.repair = repair;
    }
    getRepair() {
        return this.repair + 20
    }

}



