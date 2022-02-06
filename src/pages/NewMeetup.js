import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {
  const navigate = useNavigate();

  function onAddNewItem(dataRequest) {
    if (dataRequest) {
      fetch("https://react-hooks-example-9e233-default-rtdb.firebaseio.com/meetups.json", {
        method: "POST",
        body: JSON.stringify(dataRequest),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        navigate('/', { replace: true })
      });
    }
  } 

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewItem={onAddNewItem} />
    </section>
  );
}

export default NewMeetupsPage;
