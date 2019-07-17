import React from 'react';
//import { ListGroupItem, Collapse } from 'reactstrap';

export default class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        //this.props.onToggle(this.props.index);
    }

    render() {
      return (
        <div>
            <div onClick={(e)=>this.togglePanel(e)} className='panel-header'>
                {this.props.title}
            </div>
            {this.state.open ? (
                <div className='content'>
                    {this.props.children}
                </div>
                ) : null}
        </div>
        );
    }
  } 