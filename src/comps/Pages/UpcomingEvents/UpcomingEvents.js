import React from 'react'
import Events from './Events/Events'
import './UpcomingEvents.css'
import event1 from '../../../images/Events/event1.jpg'
import event2 from '../../../images/Events/event2.jpg'
import event3 from '../../../images/Events/event3.jpg'

const UpcomingEvents = ({setSelectedImage}) => {

    const desc = 'This is a brief desciption of the upcoming event.'
    // const crossOver = 'Description about upcoming cross over night.'

    return (
        <div className='upcoming-events-section' id='events'>
            <h1 className='heading'>UPCOMING EVENTS</h1>
            <div className='event-div' onClick={() => setSelectedImage(event1)}>
                <Events title='Church Service' desc={desc} img={event1}/>
            </div>
            <div className='event-div' onClick={() => setSelectedImage(event2)}>
                <Events title='Cross Over Night' desc={desc} img={event2}/>
            </div>
            <div className='event-div' onClick={() => setSelectedImage(event3)}>
                <Events title="Men's Conference" desc={desc} img={event3}/>
            </div>
        </div>
    )
}

export default UpcomingEvents
