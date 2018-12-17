import React, { Component } from 'react';
import Articles from './Articles';

export default class MainContainer extends Component {
    render() {
        return (
            <main>
                <div className='MainContainer'>
                    <div className='MainContainer__header'>
                        <div className='header-wrapper'>
                        <i className="material-icons">
                            done
                        </i>
                            <h1 className='active'>CSed ur perspiciatis unde</h1>
                        </div>
                        <h3>Sed ur perspiciatis unde omnis iste natus error sit voluptaten accusantium dolormque laundantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </h3>
                    </div>
                    <Articles/>
                </div>
            </main>
        )
    }
}