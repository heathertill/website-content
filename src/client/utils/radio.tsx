import * as React from 'react';


export interface LogoRadioProps {
    handlers: {
        function: any
    };
    values: {
        message: any
    };
    name: {
        radioName: any
    }
}

const LogoRadio: React.SFC<LogoRadioProps> = ({ handlers, values, name }) => {

    return (
        <section>
            <div>{values.message}</div>
            <div className="form-check-inline"  onChange={handlers.function}>
                <input type="radio" className="form-check-input mx-2" value="yes" name={name.radioName} />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name={name.radioName} />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
};

export default LogoRadio;