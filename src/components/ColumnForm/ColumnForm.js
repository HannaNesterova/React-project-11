import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';

    const TextInput = (props) => {
        return (
            <input 
        className={styles.input} 
        value={props.value} 
        onChange={props.onChange} 
        placeholder={props.placeholder} type="text" />
        )
        };

   //const [value, setValue] = useState('');
    const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const hadleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };
	return (
        <form onSubmit={hadleSubmit} className={styles.columnForm}>
            <span className={styles.textTitle}>Title: </span><TextInput className={styles.input} value={title} onChange={e => setTitle(e.target.value)} /> 
            <span className={styles.textTitle}>Icon:</span> <TextInput className={styles.input} value={icon} onChange={e => setIcon(e.target.value)} /> 
           <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;