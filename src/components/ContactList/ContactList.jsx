import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleTasks } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleTasks);


  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <div className={css.information}>
              <img
                className={css.img}
                src={'https://cdn-icons-png.flaticon.com/512/2354/2354573.png'}
                alt="icon"
              />
              <span className={css.name}>{contact.name}</span> {contact.number}
            </div>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
