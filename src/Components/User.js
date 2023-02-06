import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>

        <form>
            <input type="text" className='text-center ml24'/>
            <button>Gönder</button>
        </form>

      </div>
    )
  }
}

export default User;