import React, { useEffect, useState } from 'react';
import Card from './components/Card'
import './App.css'
import Table from './Table'
import CreateTeam from './CreateTeam'
import AddTeam from './components/AddTeam'


export default class App extends React.Component {


  state = {
    loading: true,
    person: null,
  };

  /*loadUsers = () => {
          teste
          fetch("https://api.randomuser.me/");
      }*/



  async componentDidMount() {
    const response = await fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        "x-rapidapi-key": "413dca5fddmsh2a8ff8adb7302d0p1deb49jsn872a9bacf33e"
      }
    })
      .then(response => {
        console.log(response);
      })
      .then(response => response.json())
      .catch(err => {
        console.log(err);
      });
    //const data = await response.json();
    //this.setState({person: data.results[0], loading: false});
    //console.log(data.results[0]);
  }




  render() {


    const dataHighAge = [
      { name: 'Inter Milan', age: 31.9 },
      { name: 'APOEL', age: 31.7 },
      { name: 'AC Milan', age: 31.6 },
      { name: 'Beskitas', age: 31.4 },
      { name: 'Olympiacos', age: 31.3 }
    ]
    const headHighAge = {
      name: 'Highest avg age',
    }


    const dataLessAge = [
      { name: 'Zalgiris', age: 21.1 },
      { name: 'Arsenal FC', age: 21.6 },
      { name: 'Amsterdam', age: 22.0 },
      { name: 'Nantes', age: 22.1 },
      { name: 'CSKA Moscow', age: 22.6 }
    ]
    const headLessAge = {
      name: 'Lowest avg age',
    }

    //const [tasks, setTasks] = useState([]);

    /*
        return(
          <div>
            {this.state.loading || !this.state.person ? (
              <div>loading...</div>
            ): (
                <div>
                  <div>{this.state.person.team}</div>
                </div>
              )}
          </div>
        )
    */

    return (

      <div className="col-container">


        <div className="Top">
          <img src="venturusImg.png" />
        </div>

        <div className="column">

          <Card titulo="2020 - All rigths reserved" >


            <h2 className="title">My Teams</h2>

            <AddTeam></AddTeam>

          </Card>


        </div>

        <div className="column2">
          <Card titulo="2020 - All rigths reserved">
            <h2 className="title">Top 5</h2>

            <table className='tableTop5'>
              <td>
                <div>
                  <Table data={dataHighAge} head={headHighAge} ></Table>
                </div>
              </td>

              <td>
                <div>
                  <Table data={dataLessAge} head={headLessAge} ></Table>
                </div>
              </td>

            </table>

            <div className="cards">

              <div className="container">
                <table className="table" >

                  <tbody>
                    <tr>
                      <td><img src="mostPlayer.png" /> </td>
                      <div className="top-right">
                        <b><td>75%</td></b>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="cards">
              <div id="overlay">

                <div className="container">
                  <table className="table" >

                    <tbody>
                      <tr>
                        <td><img src="lessPlayer.png" /></td>
                        <div className="top-right">
                          <b><td>25%</td></b>
                        </div>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>

            </div>

          </Card>
        </div>


        <div className="Top">
          <img src="venturusImg.png" />
        </div>

        <div className="column3">
          <Card titulo="2020 - All rigths reserved">
            <h2 className="title">Created your team</h2>

            <CreateTeam></CreateTeam>

          </Card>
        </div>


      </div>


    );
  }

}



