import React from 'react';
import SourceDisplay from './source_display';

export default (props) => {
    if (!props.scanData) {
        return <p></p>;
    }


    return (
        <div>
            {
                props.scanData.records.map(
                (source) => <SourceDisplay key={source.sha1} sourceData={source}/>)
            }
        </div>

    );
};