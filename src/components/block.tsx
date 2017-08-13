import * as React from 'react';

export interface IBlockProps {
    style?: Object;
    children: React.ReactChild | React.ReactChild[];
}

export const Block = (props: IBlockProps) =>
    <div style={props.style}>
        {props.children}
    </div>;
