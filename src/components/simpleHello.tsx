import { Component } from 'react';
import * as React from 'react';
import 'prop-types';

// interface SimpleHelloInt {
//     title: string;
// }

interface Props {
    title: string;
}

class SimpleHello extends Component<Props>  {
    // title: string;
    constructor(props: Props) {
        super(props);
        console.log(`Props: ${JSON.stringify(props)}`); 
    }

    render() {
        return (
            <div>
                Hello world
            </div>
        );
    }
}

export default SimpleHello; 