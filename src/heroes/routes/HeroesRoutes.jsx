import React from 'react'
import { Navbar } from "../../ui";

import { DcPage , MarvelPage, Search, Hero} from '../../heroes';
import { Routes, Route,Navigate } from 'react-router-dom';
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                    <Route path="marvel" element={<MarvelPage/>}/>
                    <Route path="dc" element={<DcPage/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="hero/:id" element={<Hero/>}/>
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </div>
        
    </>
  )
}
