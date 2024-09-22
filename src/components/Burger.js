import React, { Component } from 'react'
import './BurgerStyle.css'

export default class Burger extends Component {
  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }

  addRemoveIngredient = (action, ingredient) => {
    const {
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state

    let stateValue

    switch (ingredient) {
      case 'lettuce':{
        stateValue = lettuce
        break
      }
      case 'bacon':{
        stateValue = bacon
        break
      }
      case 'cheese':{
        stateValue = cheese
        break
      }
      case 'meat':{
        stateValue = meat
        break
      }
      default: break
    }
    if (action === 'add') {
      stateValue = stateValue + 1
    } else {
      stateValue = stateValue - 1
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0
    })
  }

  burgerContent = () => {
    const {
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state

    const burger = []
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className='lettuceSide' />)
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div key={burger.length} className='baconSide' />)
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className='cheeseSide' />)
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className='meatSide' />)
    }
    if (burger.length === 0) {
      const emptyMsg = <p className='emptyMsg'>No Ingredients Added</p>
      return emptyMsg
    }
    return burger
  }

  totalPrice = () => {
    const {
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state
    let totalSum = 3
    totalSum = totalSum + lettuce * 0.5 + bacon * 0.7 + cheese * 0.4 + meat * 1.3
    return parseFloat(totalSum).toFixed(2)
  }

  render () {
    return (
      <>
        <div className='burgerIngredients'>
          <div className='topSide' />
          {this.burgerContent()}
          <div className='bottomSide' />
        </div>
        <div className='ingredientsBlock'>
          <div className='builder'>
            <div className='priceBlock'>
              <p>Current price:  </p>
              <p className='emptyMsg'>${this.totalPrice()}</p>
            </div>
            <div className='ingrControls'>
              <p>Lettuce</p>
              <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className='ingrBtn'>Less</button>
              <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className='ingrBtn'>More</button>
            </div>
            <div className='ingrControls'>
              <p>Bacon</p>
              <button onClick={() => this.addRemoveIngredient('remove', 'bacon')} className='ingrBtn'>Less</button>
              <button onClick={() => this.addRemoveIngredient('add', 'bacon')} className='ingrBtn'>More</button>
            </div>
            <div className='ingrControls'>
              <p>Cheese</p>
              <button onClick={() => this.addRemoveIngredient('remove', 'cheese')} className='ingrBtn'>Less</button>
              <button onClick={() => this.addRemoveIngredient('add', 'cheese')} className='ingrBtn'>More</button>
            </div>
            <div className='ingrControls'>
              <p>Meat</p>
              <button onClick={() => this.addRemoveIngredient('remove', 'meat')} className='ingrBtn'>Less</button>
              <button onClick={() => this.addRemoveIngredient('add', 'meat')} className='ingrBtn'>More</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
