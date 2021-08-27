import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function DetailsPage(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}

// used this to generate the dynamic meetup pages at the build time only.
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin-ayush1:mYpe0GTvX9KCgVbZ@cluster0.2u0iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("meetups");

  const meetups = await collection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin-ayush1:mYpe0GTvX9KCgVbZ@cluster0.2u0iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("meetups");

  const selectedMeetups = await collection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        image: selectedMeetups.image,
        title: selectedMeetups.title,
        description: selectedMeetups.description,
        address: selectedMeetups.address,
      },
    },
  };
}

export default DetailsPage;
