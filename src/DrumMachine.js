import React,{Component} from 'react';

class DrumMachine extends Component{
    constructor(){
        super()
        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick(){
        let a = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
        a.play()
    }

    render(){
        return(
            <div id="drum-machine">
                <div id="display">
                    <button id="Q" className="drum-pad" onClick={this.buttonClick}>Q</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg">
                    </audio>
                    <button id="W" className="drum-pad">W</button>
                    <button id="E" className="drum-pad">E</button>
                    <button id="A" className="drum-pad">A</button>
                    <button id="S" className="drum-pad">S</button>
                    <button id="D" className="drum-pad">D</button>
                    <button id="Z" className="drum-pad">Z</button>
                    <button id="X" className="drum-pad">X</button>
                    <button id="C" className="drum-pad">C</button>
                </div>
            </div>
        )
    }
}

export default DrumMachine;