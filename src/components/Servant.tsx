import MaterialList from "./MaterialList";

interface Servant {
    id: number
    name: string
    icon: string
    portraits: Array<string>
    skills: Array<Skill>
    appends: Array<Skill>
    classIcon: string
    ascensionMaterials: MaterialList
    skillMaterials: MaterialList
    appendMaterials: MaterialList
}

interface Skill {
    name: string
    icon: string
}

export default Servant