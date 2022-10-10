import React from 'react'
import { Link } from 'react-router-dom';
import dcarrow from '../../assets/heroes/dc-arrow.jpg'
import dcbatman from '../../assets/heroes/dc-batman.jpg'
import dcblack from '../../assets/heroes/dc-black.jpg'
import dcblue from '../../assets/heroes/dc-blue.jpg'
import dcflash from '../../assets/heroes/dc-flash.jpg'
import dcgreen from '../../assets/heroes/dc-green.jpg'
import dcmartian from '../../assets/heroes/dc-martian.jpg'
import dcrobin from '../../assets/heroes/dc-robin.jpg'
import dcsuperman from '../../assets/heroes/dc-superman.jpg'
import dcwonder from '../../assets/heroes/dc-wonder.jpg'
import marvelcaptain from '../../assets/heroes/marvel-captain.jpg'
import marvelcyclops from '../../assets/heroes/marvel-cyclops.jpg'
import marveldaredevil from '../../assets/heroes/marvel-daredevil.jpg'
import marvelhawkeye from '../../assets/heroes/marvel-hawkeye.jpg'
import marvelhulk from '../../assets/heroes/marvel-hulk.jpg'
import marveliron from '../../assets/heroes/marvel-iron.jpg'
import marvelsilver from '../../assets/heroes/marvel-silver.jpg'
import marvelspider from '../../assets/heroes/marvel-spider.jpg'
import marvelthor from '../../assets/heroes/marvel-thor.jpg'
import marvelwolverine from '../../assets/heroes/marvel-wolverine.jpg'



const CharactersByHero=({alter_ego,characters})=>{
    if (alter_ego === characters) return (<></>)

    return <p>{characters}</p>
}
export const heroImages ={
    dcarrow,
    dcbatman,
    dcblack,
    dcblue,
    dcflash,
    dcgreen,
    dcmartian,
    dcrobin,
    dcsuperman,
    dcwonder,
    marvelcaptain,
    marvelcyclops,
    marveldaredevil,
    marvelhawkeye,
    marvelhulk,
    marveliron,
    marvelsilver,
    marvelspider,
    marvelthor,
    marvelwolverine,
}

export const HeroCard = ({
    id,
    superhero,  
    alter_ego,
    first_appearance,
    characters,
}) => {

    

    //const charactersByhero = (<p>{characters}</p>)

  return (
    <div className='col animate__animated animate__fadeIn' >
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4 '>
                    <img  src={heroImages[id.replace('-','')]} className='card-img' alt={superhero} />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        
                        <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${ id }`}>
                        Mas..</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}