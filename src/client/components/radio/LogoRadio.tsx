import * as React from 'react';


export interface LogoRadioProps {
    handlers: {
        handleLogo: any
    };
}

const LogoRadio: React.SFC<LogoRadioProps> = ({ handlers }) => {
    return (
        <section>
            <div>Do you want to use a logo?</div>
            <div className="form-check-inline" onChange={handlers.handleLogo}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="logoChoice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="logoChoice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default LogoRadio;