import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';



const CardForm = props => {
    const [title, setTitle] = useState('');
    const addColumn = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={addColumn}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form> //what to send to action={}??????  
	);
};

export default CardForm;