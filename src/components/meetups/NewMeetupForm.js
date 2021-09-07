import Card from "../ui/Card";
import classes from "./NewMeetup.module.css";
import { useRef } from "react";
const NewMeetupForm = (props) => {
  const titleInp = useRef();
  const imageInp = useRef();
  const addressInp = useRef();
  const descriptionInp = useRef();

  function submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const enteredTitle = titleInp.current.value;
    const enteredImage = imageInp.current.value;
    const enteredAddress = addressInp.current.value;
    const eneteredDescription = descriptionInp.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: eneteredDescription,
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInp} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInp} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInp} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea
            required
            rows="5"
            type="text"
            required
            id="description"
            ref={descriptionInp}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
