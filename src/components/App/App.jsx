import { ContactForm } from '../ContactForm/ContactForm';
import Notification from '../Notification/Notification';
import { Filter } from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { getError, getIsLoading, selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { Notify } from 'notiflix';
import Loader from '../Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  useEffect(()=>{
    if (error) return Notify.failure(`${error}`);
  },[error])


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
            {loading ? <Loader/>: <ContactList />}
          </div>
        )}
      </div>

        </main>
  );
};
