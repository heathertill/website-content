import * as React from 'react';

export interface SubmitEditProps {
    editable: boolean
}

const SubmitEdit: React.SFC<SubmitEditProps> = ({ editable }) => {

    return (
        <div>
            {console.log('submitEdit', editable)}
            {editable ?
                <button type="submit" className="btn btn-warning m-2">Edit</button>
                :
                <button type="submit" className="btn btn-warning m-2">Submit</button>
            }
        </div>
    );
}

export default SubmitEdit;