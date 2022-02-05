import React from 'react';

class SearchInput extends React.Component {

  constructor(props){
    super(props)

    this.state = { entry: '' }

    // method one to solve undefined (reading 'state')
    // this.onFormSubmit = this.onFormSubmit.bind(this)
    // method two is to use an arrow function for onFormSubmit, below
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
  }

  // onInputChange(event) {
  //   console.log(event.target.value) 
  // }

  render() {
    return(
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <div className='ui massive icon input'>
              <input 
                type="text" 
                placeholder='search...' 
                // onChange={this.onInputChange} // onChange, onSubmit, or onClick
                onChange={(event) => this.setState({entry:event.target.value})}
                value={this.state.entry}
              />
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchInput;