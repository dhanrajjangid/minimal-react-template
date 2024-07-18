import EventCard from "./EventCard";

const EventListing = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <EventCard />;
      })}
    </>
  );
};

export default EventListing;
