import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
          <h1>{ props.appTitle }</h1>
          <p className={assignedClasses.join( ' ' )}>Ça marche vraiment bien!</p>
          <button
            className={btnClass}
              onClick={props.clicked}>Affichez les personne</button>
        </div>
    );
};

export default cockpit;
