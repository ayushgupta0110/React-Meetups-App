import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    async function addMeetupHandler(enteredData){
        const response = await fetch('/api/meetups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enteredData),
        });

        const data = await response.json();

        console.log(data);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupForm;