import * as React from 'react';


export interface DomainRadioProps {
    handlers: {
        handleDomain: any
    };

}

const DomainRadio: React.SFC<DomainRadioProps> = ({ handlers }) => {
    return (
        <section>
            <div>Do you have a domain?</div>
            <div className="form-check-inline" onChange={handlers.handleDomain}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="domoinChoice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="domoinChoice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default DomainRadio;