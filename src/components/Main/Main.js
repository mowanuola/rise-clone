import React from 'react'
import { Hero } from './sections/Hero'
import { Partners } from './sections/Partners'
import { Features } from './sections/Features'
import { AssetClasses } from './sections/AssetClasses'
import { Save } from './sections/Save'
import { Regulations } from './sections/Regulations'
import { Reviews } from './sections/Reviews'
import { Community } from './sections/Community'
import { CTA } from './sections/CTA'
import './Main.css'

const Main = () => {
    return (
        <main>
            <Hero />
            <Partners />
            <Features />
            <AssetClasses />
            <Save />
            <Regulations />
            <Reviews />
            <Community />
            <CTA />
        </main>
    )
}

export default Main
