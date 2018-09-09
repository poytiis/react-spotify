import React ,{Component} from 'react';
import './LoginForm.css';
import * as actions from '../../Store/Actions/index';
import {connect} from 'react-redux';

class LoginForm extends Component{

    state={
        email:'',
        password:''
    };


    handleEmailChange(event){
        this.setState({email:event.target.value});
    };
    handlePassChange(event){
        this.setState({password:event.target.value});
    };

     handleSubmit = (event)=>{
        console.log('klsdskf');
        event.preventDefault();
        this.props.onAuth(this.state.email,this.state.password);

    };
    render(){
        return(
            <div className='LoginFormDiv'>
                <form onSubmit={this.handleSubmit } className='LoginForm'>

                         <input className='LoginFormField' type='text' value={this.state.email}
                                onChange={this.handleEmailChange.bind(this)} placeholder='Email'/>


                         <input className='LoginFormField' type='password' value={this.state.password}
                                onChange={this.handlePassChange.bind(this)} placeholder='Password'/>

                    <input className='LoginFormSubmit' type='submit' value='LOG IN'/>


                </form>

            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.logIn( email, password ) ),

    };
};
export  default connect(null ,mapDispatchToProps)(LoginForm);