import React from 'react'
import {Link} from 'react-router'

let divStyle = {
  border: "2px solid red",
  padding: "5px"
};

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">PBT</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/recordpb">Record PB</Link></li>
              <li><Link to="/recordweight">Weight</Link></li>
              <li><Link to="/recordmeasurements">Measurements</Link></li>
              <li><Link to="/savepics">Pics</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;