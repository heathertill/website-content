import * as React from 'react';


export interface WebRadioProps {
    handlers: {
        handleWeb: any
    };

}

const WebRadio: React.SFC<WebRadioProps> = ({ handlers }) => {
    return (
        <section>
            <div>Do yoy have an existing website?</div>
            <div className="form-check-inline" onChange={handlers.handleWeb}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="websiteChoice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="websiteChoice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default WebRadio;