import { ContactForm } from '../ContactForm/ContactForm';
import Notification from '../Notification/Notification';
import { Filter } from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])


  return (
    <main>
      <div>
        <h1 className={css.title}>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <Notification message="There is no contacts" />
        ) : (
          <div>
            <Filter />
            <ContactList />
          </div>
        )}
      </div>
    </main>
  );
};
