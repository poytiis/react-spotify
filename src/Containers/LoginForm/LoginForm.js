import React ,{Component} from 'react';
import './LoginForm.css';
import * as actions from '../../Store/Actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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
        //this.props.test();
        this.props.onAuth(this.state.email,this.state.password);

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


                         <input className='LoginFormField' type='password' value={this.state.password}
                                onChange={this.handlePassChange.bind(this)} placeholder='Password'/>



                    <input className='LoginFormSubmit' type='submit' value='LOG IN'/>
                    <h1>{this.props.error}</h1>

                </form>

            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        userId :state.auth.userId,
        error:state.auth.error
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.logIn( email, password ) ),
        clearError:()=>dispatch(actions.clearError()),
        test:()=>dispatch(actions.createUser())

    };
};
export  default connect(mapStateToProps ,mapDispatchToProps)(LoginForm);