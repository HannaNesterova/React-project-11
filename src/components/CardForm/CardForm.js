import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = (props) => {

const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        props.action({title: title}, props.columnId);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    )
}

export default CardForm;