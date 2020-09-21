
//state enum
const views = {
	LANDING: 1,
	FOOD: 2,
	STATS: 3,
	ADD: 4,
	SEARCH: 5
};

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
				onClick={() => this.addClicked()}
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
		)
		}//end if
		if(this.state.view == views.STATS) {return(null)}
	}
}


//add all to page
ReactDOM.render(
	<MainPage/>,
	document.getElementById('application')
);
