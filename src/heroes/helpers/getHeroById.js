import { heroes } from "../data/heroes"

export const getHeroId = (id)=>{
    return heroes.find(hero=>hero.id===id)
}