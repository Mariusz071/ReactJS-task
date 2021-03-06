import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainBar extends Component {
  constructor(props) {
    super(props)

    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      activeIndex: 0
    }
  }

  toggleActive(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <header className='heading'>
        <nav>
          <ul className='heading__nav'>
            <li title='Iste Natus'className={this.state.activeIndex === 0 ? 'active': null} onClick={this.toggleActive.bind(this, 0)}><Link to='/' className='btn'>Iste Natus</Link></li>
            <li title='Explicabo' className={this.state.activeIndex === 1 ? 'active': null} onClick={this.toggleActive.bind(this, 1)}><Link to='/routerlinkexample' className='btn btn--link'>Explicabo</Link></li>
            <li title='Omnis' className={this.state.activeIndex === 2 ? 'active': null} onClick={this.toggleActive.bind(this, 2)}><Link to='/routerlinkexample' className='btn btn--link'>Omnis</Link></li>
            <li title='Ipa quae' className={this.state.activeIndex === 3 ? 'active': null} onClick={this.toggleActive.bind(this, 3)}><Link to='/routerlinkexample' className='btn btn--link'>Ipa quae</Link></li>
            <li title='Perspiciatis Unde' className={this.state.activeIndex === 4 ? 'active': null} onClick={this.toggleActive.bind(this, 4)}><Link to='/routerlinkexample' className='btn btn--link'>Perspiciatis Unde</Link></li>
          </ul>
        </nav>
        <div className = 'user-panel'>
          <button className='btn btn--icon user-panel__dropdown-menu'>
            <p>
              Veris Veritatis 
            </p>
            <i className="material-icons">
                expand_more
              </i>
          </button>

          <button className='btn btn--icon user-panel__user-initial'>
            <span>Z</span>
          </button>
        </div>
      </header>
    )
  }
}