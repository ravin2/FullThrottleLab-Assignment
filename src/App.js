import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/header';
import Person from './component/Person/Person';
import Modal from "./component/Modal/Modal";
import Data from "./service/data.json"



class App extends Component {
  state = {
    modalIsOpen: false,
  }
  fulldetails;

  showModal = (personIndex,persons) => {
    this.setState({ modalIsOpen: true });
    this.fulldetails =  persons.activity_periods;
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  
  render () {

    let persons = null;

      persons = (
        <div>
          {Data.members.map((person, index) => {
            return <Person
              click={() => this.showModal(index,person)}
              name={person.real_name} 
              age={person.age}
              key={person.id}
             />
          })}
        </div>
      );

    return (
      <div className="App">
      <Header/>
      <Modal show={this.state.modalIsOpen} closed={this.closeModal} person={this.fulldetails}/>
      <div id="grid" className="grid">
      {persons}
      </div>
    </div>
    );
  }
}

export default App;
