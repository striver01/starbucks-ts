import React from 'react';

interface Props {
    title: string;
    children: string;
}

const Cardsec: React.FC<Props> = (props) => {
    return (
        <div className="px-4 py-8 w-48">
            <h1 className="text-xl xl:text-2xl font-semibold">{props.title}</h1>
            <p className="text-base">{props.children}</p>
        </div>
    );
}
Cardsec.defaultProps = {}
export default Cardsec;