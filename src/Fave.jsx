import React, { Component } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

export default class Fave extends Component {


    handleClick = (e) => {
        e.stopPropagation();
        console.log("handling Fave click!");
        
        // Add this line. You'll call the function passed through props.
        this.props.onFaveToggle()

        // Delete the setState() line. You no longer track state here.
        // this.setState({isFave: !this.state.isFave})
    };
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
                {(this.props.isFave) ? <RemoveFromQueueIcon /> : <AddToQueueIcon />}
            </div>
        )
    }
}

