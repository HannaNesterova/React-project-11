import styles from './List.module.scss';
import Column from '../Column/Column.js';




const List = () => {
    return (
      <div  className={styles.description}>
          <header className={styles.header}>
              <h2 className={styles.title}>Things to do<span className={styles.span}>soon!</span></h2>
          </header>
          <p>Interesting things I want to check out</p>
          <section className={styles.columns}>
                {Column({ title: 'Books' })}
                {Column({ title: 'Movies' })}
                {Column({ title: 'Games' })}
          </section>
      </div>
    );
  };
  
  
  export default List;