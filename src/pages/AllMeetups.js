import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch("https://react-hooks-example-9e233-default-rtdb.firebaseio.com/meetups.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setData(meetups);
    });
  }, []);

  return (
      <section>
          <h1>All mettups</h1>
          <MeetupList meetups={data} />
      </section>
  );
}

export default AllMeetupsPage;
