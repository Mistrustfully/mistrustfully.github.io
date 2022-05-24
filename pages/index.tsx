import type { NextPage } from 'next'
import Image from 'next/image'
import Avatar from "../imgs/av.png"

function Nav() {
    return (
        <div className="topnav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div> 
    )
}

function Section(
    prop: {
        header: string
    }
) {
    return (
        <h1 id={prop.header}>
            {prop.header}
        </h1>
    )
}

const Home: NextPage = () => {
  return (
    <>
            <Nav/>
            <Section header='About'/>
            {/* <Image
                className="centeredimage"
                src={Avatar}
            /> */}
            {/* <Image className="centeredimage" src="" layout='fill'/> */}
            {/* <img className="centeredimage" src="../public/favicon.png"/> */}
            <p className="centered">
                Hello! I am fcat. I also go by mistrustfully or TotallyTrustful. <br/>
                I'm 15, and have been programming for nearly 4 years on the Roblox platform! <br/>
                <br/>
                I have experience with industry standard tools, like VSCode, Git, and Rojo. I also have used tools like Roblox-TS.
            </p>
            <h2>
                Skills
            </h2>
            <p className="padded">
                - Experience with Tools like:<br/>
                &emsp; - Rojo <br/>
                &emsp; - Git <br/>
                &emsp; - Roblox-TS <br/>
                <br/>
                - Experience with Roblox Frameworks:<br/>
                &emsp; - Flamework (w/ Roblox-TS)<br/>
                &emsp; - Matter<br/>
                &emsp; - Knit<br/>
                <br/>
                - 3 years of programming experience w/ Roblox Luau<br/>
                - Fluent in Typescript & Javascript<br/>
                - Knowledgeable in Python<br/>
                - Light experience with Rust<br/>
            </p>
            <h1 id="projects">
                Projects
            </h1>
            <div className="project">
                <div>
                    <h2 className="projecttext">
                        Weaponcraft
                    </h2>
                    <img className="projectimage" src="https://tr.rbxcdn.com/b2957946d5afd13a8dd3811b0de9d231/768/432/Image/Png"/>
                </div>
                <div>
                    
                    <h2 className="projecttext">
                        Majestic Studios - (JAN 2021 -{'>'} PRESENT)
                    </h2>
                    <p className="projecttext">
                        At Weaponcraft, I was one of the backend programmers in charge of creating and maintaining several backend, and occassionally frontend systems. <br/>
                        I designed the:<br/>
                        - Node based dialogue system<br/>
                        - Quest Framework<br/>
                        - Movement and Animation system<br/>
                        - Several other services.<br/>
                        <br/>
                        During this job I gained experience with the framework Knit, ProfileService and ReplicaService.
                    </p>
                </div>
            </div>
            <h1 id="contact">
                Contact
            </h1>
            <p>
                You can contact me on several platforms!
            </p>
            <p>
                - Discord: <code>fcat#1002</code> 
            </p>
            
      </>
  )
}

export default Home
