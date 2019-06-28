import React, { Component } from 'react'
import './card.css'
import Grid from '@material-ui/core/Grid'

class Card extends Component {
  render() {
    return (
      <>
        {
          this.props.pictures.map(picture => {
            return (
              <Grid item xs={6} sm={4} m={4} l={4} xl={4} >
                <div className='card' onClick={this.props.handleClick} key={picture.number} id={picture.number} >
                  <img src={picture.link} alt={picture.number} class='image' id={picture.number} />
                </div>
              </Grid >
            )
          })
        }
      </>
    )
  }
}

export default Card
