import { Character } from "./Character";

export class Alien extends Character {
    shield: number

    constructor(name: string, radiationLevel: number, stressLevel: number, shield: number) {
        super(name, radiationLevel, stressLevel)
        this.shield = shield;
    }
    getShield() {
        return this.shield + 20
    }

}



