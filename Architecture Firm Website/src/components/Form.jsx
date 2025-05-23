import styles from "./css/Form.module.css";
import { MessagesCollectionRef } from '../config/firebase';
import { ClientsCollectionRef } from '../config/firebase';

import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { useState } from "react";

function Form() {
  const [uploading, setUploading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const isValidForm = () => {
    return firstname && lastname && email && phone && location && message;
  };

  const onSubmitProject = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!isValidForm()) {
      alert("Please fill in all fields except budget.");
      return;
    }

    try {
      setUploading(true);

      // Check if phone number is unique in Clients collection
      const q = query(ClientsCollectionRef, where('Phone', '==', phone));
      const querySnapshot = await getDocs(q);
      const phoneExists = !querySnapshot.empty;

      // Always add to Messages
      await addDoc(MessagesCollectionRef, {
        First_Name: firstname,
        Last_Name: lastname,
        Email: email,
        Phone: phone,
        Budget: budget,
        Location: location,
        Message: message,
        Read: false,
      });

      // Only add to Clients if phone is unique
      if (!phoneExists) {
        await addDoc(ClientsCollectionRef, {
          First_Name: firstname,
          Last_Name: lastname,
          Email: email,
          Phone: phone,
          Location: location,
        });
      }

      alert("Details submitted successfully!");
      // Optionally reset form fields here
    } catch (err) {
      console.error(err);
      alert("Error submitting details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.FormBackground}>
      <div className={styles.divforborder}>
        <div className={styles.ContactContainer}>
          <h2>CONTACT US</h2>
          <h1>
            Ready to make your space <br /> magnificent?
          </h1>
        </div>
        <div className={styles.FormContainer}>
          <form onSubmit={onSubmitProject}>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} required />
            <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
            <input type="text" placeholder="Budget (if any)" onChange={(e) => setBudget(e.target.value)} />
            <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" disabled={uploading}>
              {uploading ? 'Submitting...' : 'Submit Details'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
