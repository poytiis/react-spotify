import React ,{Component} from 'react';
import * as actions from '../../Store/Actions/index';
import {connect} from 'react-redux';

class SignUpForm extends Component{

    state={
        email:'',
        name:'',
        firstPassword:'',
        secondPassword:''
    };

    handleNameChange=(event)=>{
        this.setState({name:event.target.value});
    };

    handleEmailChange(event){
        this.setState({email:event.target.value});
    };
    handleFirstPassChange=(event)=>{
        this.setState({firstPassword:event.target.value});
    };
    handleSecondPassChange=(event)=>{
        this.setState({secondPassword:event.target.value});
    };

    handleSubmit = (event)=>{
        console.log('klsdskf');
        event.preventDefault();
        if(this.state.firstPassword !== this.state.secondPassword) return;
        this.props.onAuth(this.state.email,this.state.firstPassword, this.state.name);

    };

    render(){
        return(
            <div className='LoginFormDiv'>
                <form onSubmit={this.handleSubmit } className='LoginForm'>

                    <input className='LoginFormField' type='text' value={this.state.email}
                           onChange={this.handleEmailChange.bind(this)} placeholder='Email'/>

                    <input className='LoginFormField' type='text' value={this.state.name}
                           onChange={this.handleNameChange} placeholder='Your name'/>


                    <input className='LoginFormField' type='password' value={this.state.firstPassword}
                           onChange={this.handleFirstPassChange} placeholder='Password'/>

                    <input className='LoginFormField' type='password' value={this.state.secondPassword}
                           onChange={this.handleSecondPassChange} placeholder='Repeat Password'/>

                    <input className='LoginFormSubmit' type='submit' value='SIGN UP'/>


                </form>

            </div>
        );

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, name ) => dispatch( actions.signUp( email, password, name ) ),

    };
};

export default connect(null, mapDispatchToProps)(SignUpForm);