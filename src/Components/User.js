import React, { Component } from 'react'
import { PropTypes } from "prop-types"
import UserConsumer from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';


class User extends Component {
  /*
  static defaultProps={
    name: "İsim",
    department: "Deparman",
    salary: "Maaş"
  } 

  state={
    isVisible=false;
  }

  */
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    }

    //this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent(e){
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  onDeleteUser=async (dispatch,e)=>{
const {id}=this.props; 
await axios.delete("http://localhost:3004/users/"+id)
// Consumer Dispatch
dispatch({type : "DELETE_USER",payload:id});
  }

// onClickEvent=(e)=>{
// console.log(this)
// eğer arrow function kullanılırsa bind işlemi otomatik yapılır
// }

componentWillUnmount(){
  console.log("componentWillUnmount")
}

  render() {
    const { id,name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {
          value => {
            const {dispatch} =value;
            return (
              <div className='col-md-8 mb-4'>
                <div className='card' >
                  <div className='card-header d-flex justify-content-between' style={isVisible ? {backgroundColor:"#62848d",color:"white"}:null}>
                    <h4 className='d-inline' id='click' onClick={this.onClickEvent.bind(this)}>
                      {name}
                    </h4>
                    <i className='far fa-trash-alt' onClick={this.onDeleteUser.bind(this,dispatch)} style={{ cursor: "pointer" }}></i>
        
                  </div>
                  { isVisible ? <div className="card-body">
                    <p className="card-text">Departman : {department}</p>
                    <p className="card-text">Maaş : {salary}</p>
                    <Link to={`edit/${id}`} className="btn btn-warning text-white">Güncelle</Link>
                  </div>:null }
                </div>
              </div>
            )
          }
          
        }
      </UserConsumer>
    )
    
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
User.defaultProps = {
  name: "İsim",
  department: "Deparman",
  salary: "Maaş"
}





export default User;
