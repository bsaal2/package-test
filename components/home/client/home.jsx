import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
    let fruit=$("#fruit").val();
    Meteor.call('addFruit',fruit,function(err){
      if(!err){
        $("#fruit").val('');
      }
    });
  }

  render(){
    console.log(this.props.data);
    return(
      <div className="row">
        <p>This is a test.</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="fruit"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
