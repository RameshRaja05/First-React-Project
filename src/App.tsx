import React from "react"
import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
import "bulma/css/bulma.css"
import Button from "./Button"

const App:React.FC=()=>{

    return (
        <div>
          <section className="hero is-primary">
            <div className="hero-body">
              <p className="title has-text-centered">Personal Digital Assistants</p>
            </div>
          </section>
            <div className="container">
               <section className="section">
                <div className="columns is-flex is-justify-content-center is-align-items-center ">
                    <div className="column is-3">
                       <ProfileCard title="Alexa" handle="@alexa4563" image={AlexaImage} 
                       description="Alexa was created by amazon. It helps you to buy things on Amazon and explore their services."
                       />
                    </div>
                    <div className="column is-3">
                      <ProfileCard title="Cortana" handle="@cortana876" image={CortanaImage} 
                      description="It was created by Microsoft. It is the default PDA for windows operating system"
                      />
                    </div>
                    <div className="column is-3">
                      <ProfileCard title="Siri" handle="@siri097" image={SiriImage}
                      description="Apple is the creator of siri. You can find this assistant on Apple or IOS devices"
                      />
                    </div>
                </div>
               </section>
            </div>
            <Button color="red"/>
            <Button color="green"/>
            <Button color="ghost"/>
        </div>
    )
}

export default App;