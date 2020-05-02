import React, {Component} from 'react';
import GiftComponent from './Gifts';
import HBDComponent from './HappyBirthday';
import { CoundDownComponent } from './Countdown';
import { RESOURCE } from '../data/files';
import LoadingResources from './Loading';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: false,
            loading: true,
            gifts: false,
            resourceTotal: RESOURCE.length,
            resourceDone: 0,
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

    componentDidMount() {
        const resLoadDone = function() {
            this.setState({
                loading: false,
                countdown: true,
            });
        }.bind(this);

        this.preloadPictures(RESOURCE, resLoadDone);
    }

    preloadPictures (pictureUrls, callback) {
        let i, j;
    
        for (i = 0, j = pictureUrls.length; i < j; i++) {
            (function (img, src) {
                img.onload = function () {
                    this.setState({
                        resourceDone: this.state.resourceDone+1,
                    });
                    //console.log(this.state.resourceDone + ":" + pictureUrls.length);
                    if (this.state.resourceDone >= pictureUrls.length && callback) {
                        callback();
                    }
                }.bind(this);
                img.src = src;
            }.bind(this) (new Image(), pictureUrls[i]));
        }
    };

    render() {
        if(this.state.loading)
            return <LoadingResources width={1600} height={800} msg="Loading Resources" total={this.state.resourceTotal} done={this.state.resourceDone}/>
        if(this.state.countdown)
            return <CoundDownComponent end={this.endCountDown}/>
        if(this.state.gifts)
            return <GiftComponent onBackClick={this.toggleGift}/>
        else
            return <HBDComponent onGiftClick={this.toggleGift}/>
    }
} 

export default MainComponent;