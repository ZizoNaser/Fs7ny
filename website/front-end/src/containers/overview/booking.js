import React from 'react';
// import button from '../../components/search-button';
import Button from '../../components/search-button';
import '../../css/style.css';

const Book = (props) => (
    

        <div className='cta'>
            <h2 className='cta__book-now'>
            {props.availRooms? 'Good news! We have '+props.availRooms+' free rooms for your selected dates!'
                    :'Unfortunately No room is available !'}
            </h2>

            
            {props.availRooms?<Button name='Book now' invisible={'Only ' + props.availRooms + ' rooms left'} /> : null}
            

        </div>
    
        )

export default Book;