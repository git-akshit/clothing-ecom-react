import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? ( //if label is there then render else render null
            <label 
            className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`} //{/*shrink will added whenever user has typed anything */}
            >
                {label}
            </label>)
            : null}
    </div>
);

export default FormInput;