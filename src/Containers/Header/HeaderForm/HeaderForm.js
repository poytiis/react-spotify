import React,{Component} from 'react';
import './HeaderForm.css';

class HeaderForm extends Component{
    state={
        value:''
    };

    changeHandler(event){
        this.setState({
            value:event.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <form id='HeaderForm'>
                    <input type='text' value={this.state.value} onChange={this.changeHandler.bind(this)} placeholder='Search'/>

                </form>
            </React.Fragment>
        );
    }
}
export  default HeaderForm;