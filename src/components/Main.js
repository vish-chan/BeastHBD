import React, {Component} from 'react';
import GiftComponent from './Gifts';
import HBDComponent from './HappyBirthday';
import { CoundDownComponent } from './Countdown';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: false,
            gifts: true,
        }

        this.endCountDown = this.endCountDown.bind(this)
        this.toggleGift = this.toggleGift.bind(this);
    }

    endCountDown() {
        this.setState({
            countdown: false,
        })
    }


    toggleGift() {
        this.setState({
            gifts: !this.state.gifts, 
        })
    }

    render() {
        if(this.state.countdown)
            return <CoundDownComponent end={this.endCountDown}/>
        if(this.state.gifts)
            return <GiftComponent onBackClick={this.toggleGift}/>
        else
            return <HBDComponent onGiftClick={this.toggleGift}/>
    }
} 

export default MainComponent;