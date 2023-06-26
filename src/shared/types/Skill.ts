export type CharacterParamType = {
    name: CharacterParam,
    value: number,
    bonusValue: number
}

export type CharacterSkillType = {
    name: CharacterSkill,
    param: CharacterParamType,
    bonusValue: number,
    isHold: boolean
}

export enum CharacterParam {
    STRENGTH = 'сила',
    DEXTERITY = 'ловкость',
    CONSTITUTION = 'телосложение',
    INTELIGENCE = 'интелект',
    WISDOM = 'мудрость',
    HARISMA = 'харизма',
}

export enum CharacterSkill {
    ACROBATICS = 'акробатика',
    ANIMAL_HANDING = 'уход за животными',
    ARCANA = 'магия',
    ATHLETICS = 'атлетика',
    DECEPTION = 'обман',
    HISTORY = 'история',
    INSIGHT = 'проницательность',
    INTIMIDATION = 'запугивание',
    INVESTIGATION = 'анализ',
    MEDICINE = 'медицина',
    NATURE = 'природа',
    PERCEPTION = 'внимательность',
    PERFOMANCE = 'выступление',
    PERSUASION = 'убеждение',
    RELIGION = 'религия',
    SLEIGHT_OF_HANDS = 'ловкость рук',
    STEALTH = 'скрытность',
    SURVIVAL = 'выживание'
}