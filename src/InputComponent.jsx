import PropTypes from 'prop-types';
import "./Form.css";

InputComponent.propTypes = {
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    type: PropTypes.string,
}

export default function InputComponent({name, placeHolder, type, value, onChange}) {
    return (
        <div className='inputComp'>
            <h3>{name}</h3>
            <input value={value} onChange={onchange} type={`${type}`} placeholder={`${placeHolder}`} />
        </div>
    );
}