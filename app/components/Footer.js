//import React, { Component } from 'react';
//
//class Footer extends Component {
//
//  render() {
//    return (
//      <footer>
//        <div className="container">
//          <div className="row">
//            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//              Seb's Final Footer?!X
//            </div>
//          </div>
//        </div>
//      </footer>
//    );
//  }
//}
//
//export default Footer;


import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
