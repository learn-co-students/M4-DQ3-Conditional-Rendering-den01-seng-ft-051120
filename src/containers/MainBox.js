import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedItem: "profile"
  }

  changeSelectedItem = (event) => {
    event.stopPropagation()
    this.setState({ selectedItem: event.target.id })
  }

  detailsToDisplay = {
    profile: <Profile />,
    photo: <Photos />,
    cocktail: <Cocktails />,
    pokemon: <Pokemon />
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state?
    Which component should have methods to control state? Where should these methods be called?
    */

    return (
      <div>
        <MenuBar selectedItem={this.state.selectedItem} handleClick={this.changeSelectedItem} />
        {this.detailsToDisplay[this.state.selectedItem]}
      </div>
    )
  }

}

export default MainBox
