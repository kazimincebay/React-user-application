import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios';


class UpdateUser extends Component {

  state = {
    id: "",
    name: "",
    department: "",
    salary: "",
    error:false
  }

  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  formSubmit = async (dispatch, e) => {
    e.preventDefault();
    console.log(this.state)
    const {id}  = this.state;
    //Update User
    const response =await axios.put(`http://localhost:3004/users/${id}`, this.state);
    if(!this.validateForm()){
      this.setState({
        error:true
      })
      return;
    }
    dispatch({type:"UPDATE_USER",payload:response.data});
    //Redirect
    this.props.history.push("/");
  }
  validateForm=()=>{
    const {name,salary,department}=this.state;
    if (name===""||salary===""||department===""){
      return false
    }return true;
  }
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3004/users/${id}`)
    console.log(response)
    const { name, department, salary } = response.data;
    this.setState({
      id,
      name,
      salary,
      department
    })
  }



  render() {
    const { name, department, salary,error } = this.state;
    console.log(this.state)

    return <UserConsumer>
      {
        value => {
          const { dispatch } = value;
          return (

            <div className='col-md-8 mb-4'>
              <div className="card">
                <div className="card-header text-center">
                  <h4>Kullanıcı Güncelleme Formu</h4>
                </div>
                <div className="card-body">
                {error? <div className='alert alert-danger'>Lütfen Bilgilerinizi Kontrol Ediniz</div>:null}
                  <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Ad</label>
                      <input type="text" name="name" id="name" placeholder='Adınızı Giriniz' value={name} onChange={this.changeValue} className='form-control' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Departman</label>
                      <input type="text" name="department" id="department" placeholder='Departman Giriniz' value={department} onChange={this.changeValue} className='form-control' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salary">Maaş</label>
                      <input type="text" name="salary" id="salary" placeholder='Maaş Giriniz' value={salary} onChange={this.changeValue} className='form-control' />
                    </div>
                    <button type="submit" className='btn btn-success btn-block'>Kullanıcı Güncelle</button>
                  </form>
                </div>
              </div>
            </div>
          )
        }
      }
    </UserConsumer>


  }
}

export default UpdateUser;