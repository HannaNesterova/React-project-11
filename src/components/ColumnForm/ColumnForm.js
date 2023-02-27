import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
    //const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    /*const addColumn = e => {
        e.preventDefault();
        props.action({ title: value });
        setValue('');
    };*/
  

    const addColumn = (e) => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

	return (
        <form onSubmit={addColumn}>
           <span> Title: </span> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
           <span>Icon: </span><input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
            <button>Add column</button>
        </form>
	);
};

export default ColumnForm;