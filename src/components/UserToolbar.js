import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    overrides: {
      MuiSwitch: {
        icon: {
            color: grey[400],
            height: '17px',
            width: '17px'
        },
        bar: {
            backgroundColor: grey[700],
        },
      },
    },
  });

export default  class UserToolbar extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <nav className='UserToolbar'>
                    <div className='UserToolbar__item'>
                        <p className='text-highlight'>Sunt</p>
                    </div>
                    <div className='UserToolbar__item UserToolbar__item--option'>
                        <i className="material-icons">
                            check_circle
                        </i>
                        <p>Beatae Vita</p> 
                    </div>
                    <div className='UserToolbar__item'>
                        <h4 className='UserToolbar__item--header'>Doloremque laudantium otam Doloremque laudatium otam</h4>
                    </div>
                    <div className='UserToolbar__item'>
                        <div className='UserToolbar__item--empty'></div>
                    </div>
                    <div className='UserToolbar__item options-container'>
                        <button className='UserToolbar__item--option'>
                            <i className="material-icons">
                                delete
                            </i>
                            <p>Archieto</p> 
                        </button>
                        <div className='UserToolbar__item--option'>
                            <Switch color="default" />
                            <p className='UserToolbar__item--option__label'>Aperiam</p>
                        </div>
                        <div className='UserToolbar__item--option'>
                            <Switch defaultChecked  color="default" />
                            <p className='UserToolbar__item--option__label'>Totam</p>
                        </div>
                        <button className='UserToolbar__item--option'>
                            <i className="material-icons">
                                email
                            </i>
                            <p>Rem</p> 
                        </button>
                    </div>
                </nav>
            </MuiThemeProvider>
        )
    }
}