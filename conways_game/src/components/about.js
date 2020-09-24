import React from 'react';
import conway from '../images/research/conway-prism.jpg';
import beehive from '../images/still_lives/beehive.png';
import block from '../images/still_lives/block.png';
import boat from '../images/still_lives/boat.png';
import loaf from '../images/still_lives/loaf.png';
import tub from '../images/still_lives/tub.png';
import blinker from '../images/oscillators/blink.gif';
import beacon from '../images/oscillators/beacon.gif';
import pentadecathlon from '../images/oscillators/pentadecathlon.gif';
import pulsar from '../images/oscillators/pulsar.gif';
import toad from '../images/oscillators/toad.gif';
import glider from '../images/spaceships/glider.gif';
import heavy from '../images/spaceships/heavy-weight.gif';
import light from '../images/spaceships/light-weight.gif';
import medium from '../images/spaceships/medium-weight.gif';
import glider_gun from '../images/research/gosper-glider-gun.png';

function About() {
    return (
        <div >
            <div className='about_cover_photo'>
                <img className='about_title_photo' src={conway} alt='John Conway' />
            </div>
            <div className='about_bio'>
                <p className='about_name_title'>John Horton Conway</p>
                <p className='rule_photo_text'>26 December 1937 - 11 April 2020</p>
                <p className='about_bio_text'>John Conway was an English mathematician active in the theory of finite groups, knot theory, number theory, combinatorial game theory and coding theory. He also made contributions to many branches of recreational mathematics, most notably the invention of the cellular automaton called the Game of Life.
                    Born and raised in Liverpool, Conway spent the first half of his career at the University of Cambridge before moving to the United States, where he held the John von Neumann Professorship at Princeton University for the rest of his career.  On 11 April 2020, at age 82, he died of complications from COVID-19.</p>
            </div>
            <section>
                {/*<h4 className='life_form_header'>Life Forms</h4>*/}
                <h3 className='life_form_section_header'>Still Life</h3>
                <section className='still_lifes'>
                    <h2>Block</h2>
                    <div className='about_life_box'>
                        <img src={block} alt='block' />
                        <p>Block is an extremely well-known and common still life that was found by John Conway in 1970. In terms of its 4 cells it is tied with tub as the smallest still life, and in terms of its 2×2 bounding box it is the outright smallest. It is also the only known still life that is a polyomino, and the only still life where all cells have three neighbors. </p>
                    </div>
                    <h2>Beehive</h2>
                    <div className='about_life_box'>
                        <img src={beehive} alt='beehive' />
                        <p className='border_blue'>Beehive is a 6-cell still life. It can be seen as a weld of two tubs. It was found by the JHC group in 1970. </p>
                    </div>
                    <h2>Loaf</h2>
                    <div className='about_life_box'>
                        <img src={loaf} alt={'loaf'}/>
                        <p className='border_green'>Loaf is a 7-cell still life discovered by the JHC group in 1970. It can be seen as a weld of two beehives.</p>
                    </div>
                    <h2>Boat</h2>
                    <div className='about_life_box'>
                        <img src={boat} alt='boat'/>
                        <p className='border_yellow'>The boat is the only still life with 5 cells and was discovered by the JHC group in 1970. It can be thought of as a tub with an extra cell in one of the corners, or a ship with one of the corner cells removed. Like the tub and the ship, it is infinitely extensible.</p>
                    </div>
                    <h2>Tub</h2>
                    <div className='about_life_box'>
                        <img src={tub} alt='tub'/>
                        <p className='border_pink'>The tub is one of only two 4-cell still lifes (the other being the block) and was discovered by the JHC group in 1970.
                        Adding an extra cell to one of the corners results in a boat, while adding two to opposite corners results in a ship. It can also be seen as a long-1 version of the barge. </p>
                    </div>
                </section>

                <h3 className='life_form_section_header'>Oscillators</h3>
                <section className='still_lifes'>
                    <h2>Blinker</h2>
                    <div className='about_life_box'>
                        <img src={blinker} alt='blinker' />
                        <p>The blinker is the smallest and most common oscillator, found by John Conway in March 1970. It is one of only a handful of known oscillators that is a polyomino, and it is the only known finite oscillator that is one cell thick (although the pentadecathlon is "almost" one cell thick in that there is a one cell thick pattern that is a grandparent of it, and the infinite version of the worker bee is one cell thick).
                        Blinkers are very commonly formed in a set of four called the traffic light; they can similarly be born in two potential sets of six, the interchanges. There is also a fairly common constellation of four blinkers and two boat-ties. </p>
                    </div>
                    <h2>Toad</h2>
                    <div className='about_life_box'>
                        <img src={toad} alt='toad' />
                        <p>Toad is a period-2 oscillator that was found by Simon Norton in May 1970. It is one of very few known oscillators that is a polyomino in one of its phases. Toads often appear in large, complex patterns because of their ability to eat things when paired together (as in killer toads). Additionally, toads are useful as building blocks for constructing large oscillators with periods that are a multiple of two because of the various ways in which they can be hassled. </p>
                    </div>
                    <h2>Beacon</h2>
                    <div className='about_life_box'>
                        <img src={beacon} alt={'beacon'}/>
                        <p>The beacon is a common period-2 oscillator, composed of two diagonally touching blocks. It was found by John Conway in March 1970.
                        The beacon is the simplest on-off. Its rotor, known as diagonal on-off, can be supported by several different stators: the two next-smallest are seen in eater plug, mangled 1 beacon and 21P2.
                        A beacon in the right phase can trigger the boat-bit reaction.
                        It can, in some sense, be considered a billiard table.</p>
                    </div>
                    <h2>Pulsar</h2>
                    <div className='about_life_box'>
                        <img src={pulsar} alt='pulsar'/>
                        <p>Pulsar is a large but surprisingly common period-3 oscillator. It was found by John Conway in March 1970.
                        The rotor of a pulsar consists of four mutually stabilizing quadrants; alternate arrangements exist for any odd multiple of 4. A closely related oscillator — the pulsar quadrant — includes just the external "horns" of the rotor and can be stabilized on its own. </p>
                    </div>
                    <h2>Pentadecathion</h2>
                    <div className='about_life_box'>
                        <img src={pentadecathlon} alt='pentadecathion'/>
                        <p>Pentadecathlon is a period-15 oscillator that was found in 1970 by John Conway while tracking the history of short rows of cells (see one-cell-thick pattern); indeed, an orthogonal row of 10 cells evolves into this object. It is the only known oscillator that is a polyomino in more than one phase. </p>
                    </div>
                </section>

                <h3 className='life_form_section_header'>Spaceships</h3>
                <section className='still_lifes'>
                    <h2>Glider</h2>
                    <div className='about_life_box'>
                        <img src={glider} alt='glider'/>
                        <p>The glider is a pattern that travels across the board in Conway's Game of Life. It was first discovered by Richard K. Guy in 1970, while John Conway's group was attempting to track the evolution of the R-pentomino. Gliders are the smallest spaceships, and they travel diagonally at a speed of one cell every four generations, or c / 4. The glider is often produced from randomly generated starting configurations. John Conway has remarked that he wishes he hadn't called it the glider. The game was developed before the widespread use of interactive computers, and after seeing it animated, he feels the glider looks more like an ant walking across the plane.</p>
                    </div>
                    <h2>Light Weight Spaceship</h2>
                    <div className='about_life_box'>
                        <img src={light} alt='lightweight'/>
                        <p>The lightweight spaceship is the smallest orthogonal spaceship, and the second most common spaceship after the glider. It moves at speed c/2 and has period 4 (and is therefore often referred to as 2c/4). It was found by John Conway in 1970. </p>
                    </div>
                    <h2>Middle Weight Spaceship</h2>
                    <div className='about_life_box'>
                        <img src={medium} alt={'middleweight'}/>
                        <p>The middleweight spaceship is the third most common spaceship after the glider and lightweight spaceship. It was found by John Conway in 1970 and travels at c/2 orthogonally. It can support various non-standard components, such as pushalong 1. </p>
                    </div>
                    <h2>Heavy Weight Spaceship</h2>
                    <div className='about_life_box'>
                        <img src={heavy} alt='heavy'/>
                        <p>The heavyweight spaceship is the fourth most common spaceship after the glider, lightweight spaceship and middleweight spaceship. It was found by John Conway in 1970 and travels at a speed of c/2 orthogonally. Its domino spark can be used to stabilize several tagalongs, including sidecar and half of x66. It is one of only three known spaceships that is a polyomino in any of its phases.</p>
                    </div>
                </section>
            </section>
             <h3 className='life_form_section_header'>Mathematical Games</h3>
                <section className='glider_gun'>
                    <img src={glider_gun} alt='glider_gun' />
                    <p className='glider_text'>Conway originally conjectured that no pattern can grow indefinitely—i.e. that for any initial configuration with a finite number of living cells, the population cannot grow beyond some finite upper limit. In the game's original appearance in "Mathematical Games", Conway offered a prize of fifty dollars to the first person who could prove or disprove the conjecture before the end of 1970. The prize was won in November by a team from the Massachusetts Institute of Technology, led by Bill Gosper; the "Gosper glider gun" produces its first glider on the 15th generation, and another glider every 30th generation from then on. For many years, this glider gun was the smallest one known. In 2015, a gun called the "Simkin glider gun", which releases a glider every 120th generation, was discovered that has fewer live cells but which is spread out across a larger bounding box at its extremities.</p>
                </section>
        </div>
    )
}

export default About;