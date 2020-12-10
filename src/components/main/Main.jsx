import React from 'react'
import Booklist from '../booklist/Booklist'
import Contacts from '../contacts/Contacts'

function Main() {
    return (
        <div>
            <p>Cia mes testuosime savo uzduotis</p>
            <Contacts name='Jolita' email='j.kun@gmail.com' initialAge={0}/>
            <Booklist/>
        </div>
    )
}

export default Main
