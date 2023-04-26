import React from 'react'
import Grid from './Grid'
import "./Creation_Grid.css"
import deep from  "../../assets/images/desktop/image-deep-earth.jpg"
import Mdeep from  "../../assets/images/mobile/image-deep-earth.jpg"
import Night from  "../../assets/images/desktop/image-night-arcade.jpg"
import MNight from  "../../assets/images/mobile/image-night-arcade.jpg"
import Soccer from  "../../assets/images/desktop/image-soccer-team.jpg"
import MSoccer from  "../../assets/images/mobile/image-soccer-team.jpg"
import The_grid from  "../../assets/images/desktop/image-grid.jpg"
import MThe_grid from  "../../assets/images/mobile/image-grid.jpg"
import From_above from  "../../assets/images/desktop/image-from-above.jpg"
import MFrom_above from  "../../assets/images/mobile/image-from-above.jpg"
import Pocket from  "../../assets/images/desktop/image-pocket-borealis.jpg"
import MPocket from  "../../assets/images/mobile/image-pocket-borealis.jpg"
import Curiosity from  "../../assets/images/desktop/image-curiosity.jpg"
import MCuriosity from  "../../assets/images/mobile/image-curiosity.jpg"
import Fisheye from  "../../assets/images/desktop/image-fisheye.jpg"
import MFisheye from  "../../assets/images/mobile/image-fisheye.jpg"

const Creation_Grid = () => {
  return (
    <section className='w-full h-[fit-content] pb-10 '>
    <div className='w-full md:max-w-[80%] mx-auto my-0  py-9 md:py-20 flex justify-between items-center' >
        <h3 className='w-full md:w-[fit-content] uppercase text-4xl text-center'>Our creations</h3>
        <button className='px-9 py-1 tracking-wider md:block lg:block hidden text-white bg-black uppercase border-black border-2'>See all</button>
    </div>
    <div className='grid w-[90%]  md:w-[80%] gap-10 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4    mx-auto my-0 '>
      <Grid 
        MimgSrc={Mdeep}
        imgSrc={deep}
        fname="deep  "
        lname="earth"
      />
      <Grid 
      MimgSrc={MNight}
        imgSrc={Night}
        fname="Night "
        lname="Arcade"
      />
      <Grid 
      MimgSrc={MSoccer}
        imgSrc={Soccer}
        fname="soccer "
        lname="team VR"
      />
      <Grid 
      MimgSrc={MThe_grid}
        imgSrc={The_grid}
        fname="the "
        lname="grid"
      />
      <Grid 
      MimgSrc={MFrom_above}
        imgSrc={From_above}
        fname="Form up "
        lname="above vr"
      />
      <Grid 
      MimgSrc={MPocket}
        imgSrc={Pocket}
        fname="pocket  " 
        lname="borealis"
      />
      <Grid 
      MimgSrc={MCuriosity}
        imgSrc={Curiosity}
        fname="the "
        lname="curiosity"
      />
      <Grid 
      MimgSrc={MFisheye}
        imgSrc={Fisheye}
        fname="make it "
        lname="fisheye"
      />
    </div>
    <button className='px-9 py-1 tracking-wider  block md:hidden mx-auto my-8 text-black bg-white uppercase border-black border-2'>See all</button>
    </section>
  )
}

export default Creation_Grid