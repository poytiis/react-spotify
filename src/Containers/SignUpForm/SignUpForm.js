import React ,{Component} from 'react';
import * as actions from '../../Store/Actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

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
        if(this.state.firstPassword !== this.state.secondPassword) {
            this.props.passwordsDontMatch();
            return;
        }
        this.props.onAuth(this.state.email,this.state.firstPassword, this.state.name);

    };
    componentWillUnmount(){
        this.props.clearError();
    }

    render(){

       let re= this.props.userId !==null?<Redirect to ='/'/>:null;

        return(

            <div className='LoginFormDiv'>
                {re}

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
                    <h1>{this.props.error}</h1>

                </form>

            </div>
        );

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, name ) => dispatch( actions.signUp( email, password, name ) ),
        passwordsDontMatch:()=>dispatch(actions.passwordsDontMatch()),
        clearError:()=>dispatch(actions.clearError())
    };
};
const mapStateToProps=state=>{
    return{
        userId :state.auth.userId,
        error:state.auth.error
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);