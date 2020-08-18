import * as React from 'react';


export interface PrintMaterialRadioProps {
    handlers: {
        handlePrintMaterial: any
    };
   
}

const PrintMaterialRadio: React.SFC<PrintMaterialRadioProps> = ({ handlers }) => {
    return (
        <section>
            <div>Do you have a domain?</div>
            <div className="form-check-inline" onChange={handlers.handlePrintMaterial}>
                <input type="radio" className="form-check-input mx-2" value="yes" name="choice" />
                <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                <input type="radio" className="form-check-input mx-2" value="no" name="choice" />
                <label htmlFor="existingWeb" className="form-check-label">No</label>
            </div>
        </section>
    );
}

export default PrintMaterialRadio;