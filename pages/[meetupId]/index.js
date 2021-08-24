import MeetupDetail from "../../components/meetups/MeetupDetail";

function DetailsPage() {
  return (
    <MeetupDetail
      image="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
      title="First Meetup"
      description="This is the first Meetup"
      address="1234, City Street, California"
    />
  );
}

export async function getStaticPaths(){
  return {
    paths: [
      {params: {meetupId: 'first'}},
      {params: {meetupId: 'second'}},
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
        title: "First Meetup",
        description: "This is the first Meetup",
        address: "1234, City Street, California",
      },
    },
  };
}

export default DetailsPage;
