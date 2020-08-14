import * as React from 'react';


export interface RadioProps {
    question: any,
    function: any
}

const Radio: React.SFC<RadioProps> = ({  }) => {
    return (
        <section>
            <div>{question}</div>
            <div className="form-check-inline" onChange={function}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="choice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="choice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default Radio;