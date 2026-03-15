import SingleEvent from '../../../src/components/events/single-event';

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
  const data = await import('../../../data/data.json');
  const allEvents = data.allEvents;

 const allPaths = allEvents
  .filter((event) => event.city && event.id)
  .map((event) => {
    return {
      params: {
        cat: event.city,
        id: event.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import('../../../data/data.json');

  const eventData = allEvents.find((ev) => id === ev.id);

  if (!eventData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: eventData },
  };
}
