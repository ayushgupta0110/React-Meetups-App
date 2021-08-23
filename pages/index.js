import Card from "../components/ui/Card";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    address: "1234, City Street, California",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    address: "1234, City Street, Canada",
  },
];

function HomePage() {
  return;

  <MeetupList meetups={DUMMY_MEETUPS} />;
}
