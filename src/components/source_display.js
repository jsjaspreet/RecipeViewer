import React from 'react';

export default (props) => {
    const sourceData = props.sourceData;
    return (

        <div className="source-display-container">
            <div className="source-data-display">
                <h5 className="source-code-id">
                <span className="source-code">
                    {sourceData.source_code}</span> :
                    <span className="source-record-id"> {sourceData.source_record_id}</span>
                </h5>
                <div>
                    <h4 className="business-name">{sourceData.data.business_name}</h4>
                </div>
                <div className="address">
                    <div className="street-address">
                        {sourceData.data.street_address}
                    </div>
                    <div>
                        <span className="city">{sourceData.data.city}</span>,
                        <span className="state">{sourceData.data.state}</span>
                    <span className="zip">
                        {sourceData.data.zip5}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
