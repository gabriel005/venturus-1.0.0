import React, { useEffect, useState, Component } from 'react'
import InputTag from './components/InputTag';
import './components/layout/Card.css'
import ReactDOM from "react-dom";


const initialState = {
  teamName: '',
  description: '',
  webSite: '',
  typeTeam: '',
  tag: '',
  formation: '',
  webSiteError: ''
}

let name;
let age;
let nacionality;

const player = [
  ["Cristian Ronaldo"] + [", 32"] + [" ,Portugal"],
  ["Ronaldo Luiz de Alves"] + [", 28"] + [" ,Brazil"],
  ["Ronaldo da Silva de Souza"] + [", 18"] + [" ,Brazil"],
  ["Lionel Messi"] + [", 32"] + [" ,Argentina"],
  ["Neymar Jr"] + [", 28"] + [" ,Brazil"],
];


const SearchP = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };


  React.useEffect(() => {
    const results = player.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <tr>


        {searchResults.map(item => (

          <table className='tableTeamPlayer'>
            <tr>
              <div className='divTeam'>
                <tr><b>Name: <font color="#CB2359">{item}</font></b></tr>
              </div>
            </tr>

          </table>

        ))}


      </tr>

    </div>
  );
}






class CreateTeam extends React.Component {
  state = initialState;

  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      description: '',
      webSite: '',
      typeTeam: '',
      tag: '',
      formation: '',
      webSiteError: ''
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      console.log(this.state);
      this.setState(initialState);

    }
    /*
        const teamNameSave = event.target.elements.teamNameSave.value;
        localStorage.setItem('@welcome-app/teams', teamNameSave);
        window.location.reload();*/

  }

  /*
    handleLogout = () => {
      localStorage.removeItem('@welcome-app/teams');
      window.location.reload();
    }
  */

  validate = () => {
    let webSiteError = '';

    if (!this.state.webSite.includes('http://www.')) {
      alert("Error\n\nWebsite is invalid");
      webSiteError = "Website is invalid: missing 'http://www.'";
    } else {
      alert("Successful"
        + "\n\nTeam Name: " + this.state.teamName
        + "\nDescription: " + this.state.description
        + "\nWeb Site: " + this.state.webSite
        + "\nFomation: " + this.state.formation);
    }
    if (webSiteError) {
      this.setState({ webSiteError });
      return false;
    }


    return true;
  };

  handlerChange = event => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value
    });
  };



  render() {


    return (


      <div className="Item-container">
        <form onSubmit={this.mySubmitHandler}>


          <table className='tableTeam'>
            <tr>
              <th align='center' className="titleCreate">TEAM INFORMATION</th>
            </tr>

            <h2>Team Name</h2>

            <input
              name="teamName"
              placeholder="Insert team name"
              className="Item-field"
              value={this.state.teamName}
              onChange={this.handlerChange}
            />


            <h2>Description</h2>
            <textarea rows="4" cols="33"
              name="description"
              className="Item-field"
              value={this.state.description}
              onChange={this.handlerChange}
            />
          </table>

          <table className='tableTeam'>
            <td>
              <h2>Team Website</h2>
              <input
                name="webSite"
                placeholder="http://www.corinthians.com"
                className="Item-field"
                value={this.state.webSite}
                onChange={this.handlerChange}
              />

              <div style={{ color: "red", fontSize: 12, padding: 5 }}>
                {this.state.webSiteError}
              </div>


              <h2>Team Type</h2>
              <input
                type="radio"
                className="buttonRadio-field"
                name="typeTeam"
                value={this.state.typeTeam}
                onChange={this.handlerChange}
              />Real

        <input
                type="radio"
                className="buttonRadio-field"
                name="typeTeam"
                value={this.state.typeTeam}
                onChange={this.handlerChange}
              />Fantasy

        <h2>Tag</h2>
              <InputTag
                className="Item-field"
                name="tag"
                value={this.state.tag}
                onChange={this.handlerChange}
              />
            </td>

          </table>



          <table className='tableTeam'>

            <tr>
              <th align='center' className="titleCreate">CONFIGURE SQUAD</th>
            </tr>


            <h2>Formation</h2>
            <select
              onChange={this.handlerChange}
              value={this.state.formation}
              name="formation">
              <option selected value="3-4-3">3-4-3</option>
              <option value="4-4-2">4-4-2</option>
              <option value="3-5-1">3-5-1</option>
              <option value="5-4-1">5-4-1</option>
            </select>

            <div>
              <td><img src="campoFut.png" /> </td>
            </div>

            <button type="submit" onChange=""><img src="save.png" /></button>

          </table>

          <table className='tableTeam'>
            <td>

              <h2>Search Players</h2>
              <td>
                <div><SearchP></SearchP></div>
              </td>

            </td>

          </table>

        </form>
      </div>
    );
  }
};

export default CreateTeam;