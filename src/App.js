import React, {Component} from 'react';
import axios from 'axios';
import RestaurentCard from './restaurentcard'
import Cuisine from './cuisine'
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    }
  }
  
  render() {
      var  data = this.state.meal;
      return (
      <div>
      <div class="jumbotron jumbotron-billboard text-center">
	<div class="img"></div>
	<div class="container pt">
		<div class="text-center" style={{display:'flex' , justifyContent:'center'}}>
			<img class="logo" src='http://image.ibb.co/g52Ayb/Go_Food_2.png' />
		</div>
		<div class="mt-5 text-color">
			<h1>Find the best Restaurants</h1>
		</div>
		<div class="row mx-auto well col-lg-12 mt-5">
			{/* <div class="col-xs-4 pr-0">
				<select id="select_id" class="form-control form-control-lg">
					<option value="Select City" hidden>Select City</option>
					<option value="4">Bengaluru</option>
					<option value="3" >Mumbai</option>
					<option value="1">Delhi</option>
					<option value="6">Hyderabad</option>
					<option value="5">Pune</option>
				</select>
			</div> */}
			<div class="col-xs-4 pr-0">
				<div> Search for Restaurant.</div>
			</div>
			<div class="col-xs-6 pl-0 pr-0">
				<input id="getText" type="text" class="form-control" placeholder="Search for Restaurant"/>
				</div>
				<button id = "getMessage" class = "btn btn-success col-xs-2">Search</button>
			</div>
		</div>
	</div>
	<div class="container">
		<div>
			<div class = "message col-md-12"></div>
		</div>
	</div>

      <div className="App">
  
      </div>
	  <RestaurentCard/>


	   </div>
    )
  }
}

export default App;
