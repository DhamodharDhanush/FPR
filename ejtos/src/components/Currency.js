import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CURRENCY = (props) => {
    const { currency  } = useContext(AppContext);
    const [SetNewCurrency] =useState(currency);
    const handleCurrencyChange = (event) => {
        SetNewCurrency(event.target.value);
    }


return (
    <div>
        <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Currency </label>
            </div>
            <span>
            <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                        <option defaultValue>Euro</option>
                        <option value="Euro" name="Euro"> Euro</option>
                <option value="Dollar" name="Dollar">Dollar</option>
                <option value="Pound" name="Pound">Pound</option>
                <option value="Ruppee" name="Ruppee">Ruppee</option>
                  </select>
                  </span>
                  </div>
          </div>
    </div>
);
};

export default CURRENCY