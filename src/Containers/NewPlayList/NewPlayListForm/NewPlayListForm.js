import React , {Component} from 'react';
import './NewPlayListForm.css';
import musik_note from '../../../Assets/Pictures/music_note.png'
import Button from '../../../Components/Button/Button'

class NewPlayListForm extends  Component{

    state={
        nameField:'',
        textArea:''
    };

    handleNameChange=(event)=>{
        this.setState({nameField:event.target.value})
    };
    handleDescriptionChange=(event)=>{
        this.setState({textArea:event.target.value})
    };

    render(){
        const buttonStyle={
            backgroundColor:'#121111',
            color:'white',
            border:'1px solid white',
            fontSize:'12px',
            whiteSpace:'nowrap',
            height:'30px',
            minWidth:'0px',
            width:'90%',
            padding:'0'
        };
        const buttonStyleBottomBlack={
            backgroundColor:'#121111',
            color:'white',
            border:'1px solid white',
            fontSize:'12px',
            whiteSpace:'nowrap',
            height:'30px',
            minWidth:'0px',
            width:'95px',
            padding:'0',
            marginRight:'15px'
        };
        const buttonStyleBottomGreen={
            backgroundColor:'#49AF50',
            color:'white',
            border:'none',
            fontSize:'12px',
            whiteSpace:'nowrap',
            height:'30px',
            minWidth:'0px',
            width:'95px',
            padding:'0'

        };
        return(
            <form id='NewPlayListForm'>
                <label className='greyText' id='NewPlayListFormLabel'>Name</label>
                <div className='flexDiv'>
                    <input type='text' id='NewPlayListFormNameField' placeholder='Playlist name' value={this.state.nameField} onChange={this.handleNameChange}/>
                    <div id='whiteBox'> <div id='blueBox'><span className='chars'>{this.state.nameField.length}/100</span></div></div>
                </div>
                <div className='flexDiv'>
                    <div id='leftHalf'>
                        <p className='greyText'>Image</p>
                        <div className='flexColumn'>
                            <img alt='Playlist img' src={musik_note}/>
                            <Button stylee={buttonStyle}>CHOOSE IMAGE</Button>
                        </div>

                    </div>
                    <div id='rightHalf'>
                        <div className='flexEnded'>
                            <p className='greyText'>Description</p>
                            <div className='flexDiv' id='otherBlueBox'><span className='chars'>{this.state.textArea.length}/100</span></div>
                        </div>
                        <textarea id='PLayListTextArea' rows={8} cols={35} value={this.state.textArea} onChange={this.handleDescriptionChange} placeholder='give your playlist a catchy description' />

                    </div>


                </div>
                <div id='bottomHalf'>
                    <div id='buttonContainer'>
                        <Button stylee={buttonStyleBottomBlack}>cancel</Button>
                        <Button stylee={buttonStyleBottomGreen}>create</Button>
                    </div>


                </div>


            </form>
        );
    }
}
export  default NewPlayListForm