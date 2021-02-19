import React, { Component } from 'react'
import Cabecera from './Cabecera'
import Lista from './Lista'

export default class ViewList extends Component {
  render() {
      const { data, handleClick } = this.props
return(
<div>
<Cabecera></Cabecera>
<Lista data={data} handleClick={handleClick}></Lista>
</div>)

}
}
