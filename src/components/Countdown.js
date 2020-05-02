import React, {Component} from 'react';
import moment from 'moment';


const TARGET = moment("2021-04-06 23:59:59", "YYYY-MM-DD HH:mm:ss");

export class CoundDownComponent extends Component{

    constructor(props) {
        super(props);
        this.state= {
            diff: Math.max(0, TARGET.diff(moment())),
        }
    }

    componentDidMount() {
        var tid = setInterval(function(){
            const diff = TARGET.diff(moment());
            if(diff<=0) {
                this.props.end();
                clearInterval(tid);
            } else {
                this.setState({
                    diff: diff,
                });
                console.log(diff);
            }
            
        }.bind(this), 1000);
    }

    render() {
        const sec = Math.floor(this.state.diff/1000);

        return(
            <div className="countDown">
                <div style={{width:'100%', display:'flex', alignItems: 'center', justifyContent:'center'}}>
                    <p >{sec}</p>
                </div>
                <div>
                    <h3>Coundown to Beast's Birthday</h3>
                </div>
            </div>
        )
    }
}