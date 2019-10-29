import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega';
import { EventEmitter } from 'events';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      drilledProp1: "I am the last drilled prop - Proptimus Prime!!!",
      drilledProp2: "I am the middle drilled prop - Proptimus Beta!",
      drilledProp3: "I am the first drilled prop - Proptimus Omega...",
      activeProp: ""
    }
  }


  callForBadHelp = (event) => {
    event.preventDefault()
    console.log("Bad Help has Arrived")
    this.setState({
      activeProp: "Proptimus Omega"
    })
  }

  callForBetterHelp = (event) => {
    event.preventDefault()
    console.log("Better Help has Arrived")
    this.setState({
      activeProp: "Proptimus Beta"
    })

  }

  gimmeAllYouGot = (event) => {
    event.preventDefault()
    console.log("The Calvary is Here!")
    this.setState({
      activeProp: "Proptimus Prime"
    })
  }

  sendThemHome = (event) => {
    event.preventDefault()
    console.log("Crisis Diverted")
    this.setState({
      activeProp: ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick = { this.callForBadHelp }
          />

          {this.state && this.state.activeProp === "Proptimus Omega" &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusOmega 
            image = { this.state.proptimusPhotos["Proptimus Omega" ]} 
            callForHelp = { this.callForBetterHelp }
            catchPhrase = { this.state.drilledProp3 }
            />
          </>
          }
          {this.state && this.state.activeProp === "Proptimus Beta" &&
          <>
            <p className="">Coming in hot!</p>
            <ProptimusOmega 
            image = { this.state.proptimusPhotos["Proptimus Beta" ]} 
            callForHelp = { this.gimmeAllYouGot }
            catchPhrase = { this.state.drilledProp2 }
            />
          </>
          }
          {this.state && this.state.activeProp === "Proptimus Prime" &&
          <>
            <p className="">Don't even worry about it - I Got this.</p>
            <ProptimusOmega 
            image = { this.state.proptimusPhotos["Proptimus Prime" ]} 
            callForHelp = { this.sendThemHome }
            catchPhrase = { this.state.drilledProp3 }
            />
          </>
          }

        </header>
      </div>
    );
  }
}
