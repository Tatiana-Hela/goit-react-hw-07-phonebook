import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item} key={id}>
      <p className={css.info}>
        {name}: {phone}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
