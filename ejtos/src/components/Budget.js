import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget > 20000) {
            alert("The budget cannot exceed 20,000");
        };
        if(newBudget < 960) {
            alert("You cannot reduce budget value lower than spending");
        };
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £    </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>

</div>
    );
};
export default Budget;
