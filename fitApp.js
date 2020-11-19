
//state enum
const views = {
	LANDING: 1,
	FOOD: 2,
	STATS: 3,
	ADD: 4,
	SEARCH: 5,
	NEWFOOD: 6
};

/*************
 ** BUTTONS **
 *************/
//add food button
class AddButton extends React.Component 
{
	render()
	{
		return(
		<button className="addbutton"
			onClick={() => this.props.onClick()}
		>
		<span> Add Food </span>
		</button>
		)
	}
}

//add statistics button
class StatButton extends React.Component 
{
	render()
	{
		return(
		<button className="statbutton"
			onClick={() => this.props.onClick()}
		>
		<span> Statistics </span>
		</button>
		)
	}
}

//add new food button
class NewFoodButton extends React.Component 
{
	render()
	{
		return(
		<button className="newfoodbutton"
			onClick={() => this.props.onClick()}
		>
		<span> New Food </span>
		</button>
		)
	}
}

//search button
class SearchButton extends React.Component 
{
	render()
	{
		return(
		<button className="searchbutton"
			onClick={() => this.props.onClick()}
		>
		<span> Search Food </span>
		</button>
		)
	}
}

//search button
class MyButton extends React.Component 
{
	render()
	{
		return(
		<button className={this.props.classname}
			onClick={() => this.props.onClick()}
		>
		<span> Return </span>
		</button>
		)
	}
}

/***********
 ** FORMS **
 ***********/
//generic vertical form
class NewFoodForm extends React.Component
{
	constructor(props) {
		super(props)
		this.state = {
			fName: '',
			cals: '',
			prot: '',
			carbs: '',
			fat: ''
			};
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	//curried function that returns an event handler for a given field
	changeHandler = (key) => (event) =>
	{
		this.setState({[key]: event.target.value});
	}
	
	//handle submit
	submitHandler(event)
	{
		event.preventDefault();
		
		if(this.state.fName.length == 0){
			alert('Name must not be empty');
			return;
		}
		if(!parseFloat(this.state.cals)){
			alert('Please provide a valid number of calories');
			return;
		}
		if(!parseFloat(this.state.prot) && this.state.prot.length > 0){
			alert('Protein must be a number');
			return;
		}
		if(!parseFloat(this.state.carbs) && this.state.carbs.length > 0){
			alert('Carbs must be a number');
			return;
		}
		if(!parseFloat(this.state.fat) && this.state.fat.length > 0){
			alert('Fat must be a number');
			return;
		}

		//send json to API
		fetch(window.location.hostname + ":8080/FitAppBackend/API/food", {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.fName,
				cals: this.state.cals,
				prot: this.state.prot,
				carbs: this.state.carbs,
				fat: this.state.fat
			})		
		});
	}

	render() {
		return(
		<form onSubmit={this.submitHandler}>
		<p className='nameLabel'>Name: </p>
		<div className='vertDiv'>
			<input	className='vert' 
				type='text'
				onChange={this.changeHandler('fName')}
			/>
		</div>
		<div className='vertDiv'>
			<input	className='vert' 
				type='text'
				onChange={this.changeHandler('cals')}
			/>
			<span>	kilocalories</span>
		</div>
		<div className='vertDiv'>
			<input	className='vert' 
				type='text'
				onChange={this.changeHandler('prot')}
			/>
			<span>	protein (grams)</span>
		</div>
		<div className='vertDiv'>
			<input	className='vert' 
				type='text'
				onChange={this.changeHandler('carbs')}
			/>
			<span>	carbs (grams)</span>
		</div>
		<div className='vertDiv'>
			<input	className='vert' 
				type='text'
				onChange={this.changeHandler('fat')}
			/>
			<span>	fat (grams)</span>
		</div>
		<div>
			<input type='submit' value='Submit'/>
		</div>
		</form>
		);
	}	
}

//master element
class MainPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			view: views.LANDING,
		}
	}
	
	//TODO: these could be done with curried functions taking an enum
	//function for when addButton clicked
	addClicked()
	{
		this.setState({view: views.FOOD});
	}

	//function for when StatButton clicked
	statClicked()
	{
		this.setState({view: views.STATS});
	}

	//function for when addButton clicked
	newClicked()
	{
		this.setState({view: views.ADD});
	}

	//function for when StatButton clicked
	searchClicked()
	{
		this.setState({view: views.SEARCH});
	}

	//for when return is clicked
	retClicked()
	{
		this.setState({view: views.LANDING});
	}


	render()
	{
		if(this.state.view == views.LANDING) {
		return(
		<div id='parent'>
			<div id='d1'>
			<AddButton
				onClick={() => this.addClicked()}
			/>
			</div>
			<div id='d2'>
			<StatButton 
				onClick={() => this.statClicked()}
			/>
			</div>
		</div>
		);
		}//end if

		if(this.state.view == views.FOOD) { 
		return(
		<div id='parent'>
			<div id='d1'>
			<NewFoodButton
				onClick={() => this.newClicked()}
			/>
			</div>
			<div id='d2'>
			<SearchButton 
				onClick={() => this.statClicked()}
			/>
			<MyButton
				classname='retfoodbutton'
				onClick={() => this.retClicked()}
			/>
			</div>
		</div>
		);
		}//end if
		if(this.state.view == views.STATS) {return(null)}

		if(this.state.view == views.ADD) {
		return(
		<div id='parent'>
			<NewFoodForm/>
		</div>
		);
		}
	//print token
	const params = new URLSearchParams(window.location.search)
	if(params.has('access_token');
	{alert(params.get('access_token'));}
	}
}


//add all to page
ReactDOM.render(
	<MainPage/>,
	document.getElementById('application')
);
