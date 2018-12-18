import React, { Component } from 'react';
import CustomDropdown from './CustomDropdown';

export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul className='Menu__nav'>
                    <li className='text-highlight'><button className='btn btn--menu'>Perspiciatgis Unde</button></li>
                    <li className='active'><button className='btn btn--menu'>Accusantium doloremque laudant</button></li>
                    <li><button className='btn btn--menu'>Voluptaten (duvrnem)</button></li>
                </ul>
                <div className='Menu__dropdown-wrapper'>
                    <p className='text-highlight'>Iste Natus</p>
                        <CustomDropdown />
                    <p className='active'>Unde omnis</p>
                </div>              
            </div>
        )
    }
}




