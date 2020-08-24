import * as React from 'react';


export interface StyleRadioProps {
    handlers: {
        handleStyle: any
    };

}

const StyleRadio: React.SFC<StyleRadioProps> = ({ handlers }) => {
    return (
        <section>
            <div>Do you have company style/brand standards?</div>
            <div className="form-check-inline" onChange={handlers.handleStyle}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="styleChoice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="styleChoice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default StyleRadio;