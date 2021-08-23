import classes from './MeetupDetail.module.css';

function DetailsPage(props){
    return(
        <section className={classes.details}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.address}</p>
            <p>{props.description}</p>
        </section>
    );
}

export default DetailsPage;