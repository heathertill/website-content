import * as React from 'react';
import { Component } from 'react';

export interface JumboProps {

}

const Jumbo: React.SFC<JumboProps> = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-4">Web Spinner Books</h1>
                <p>Welcome to my bookstore!</p>
            </div>
        </div>
    );
}

export default Jumbo;