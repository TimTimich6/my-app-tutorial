import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
const NewMeetup = () => {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-starting-a91bf-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meetupData),
      }
    ).then((res) => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
