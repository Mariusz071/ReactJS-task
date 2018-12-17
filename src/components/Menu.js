import React, { Component } from 'react';
import CustomDropdown from './CustomDropdown';

export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul className='Menu__nav'>
                    <li className='text-highlight'><button>Perspiciatgis Unde</button></li>
                    <li className='active'><button>Accusantium doloremque laudant</button></li>
                    <li><button>Voluptaten (duvrnem)</button></li>
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




