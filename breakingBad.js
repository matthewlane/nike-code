'use strict';
const shows = ['Breaking Bad', 'Mad Men', 'Good Times'];
const periodicTable = ['Br', 'Ba', 'Ma', 'Go'];

function styleShows(shows, periodicTable) {
  let styledShows = [];

  // look at each show
  shows.forEach(show => {

    // look at each element
    periodicTable.forEach(element => {
      let index = show.indexOf(element);

      // the element exists somewhere in the show
      if (index !== -1) {

        // transform by placing <span> just before the element location
        // place next two characters inside the span
        // close out the span and place the remainder of the show after
        show =
          show.substring(0, index)
          + '<span>'
          + show.substring(index, index+2)
          + '</span>'
          + show.substring(index+2);
      }
    });

    // after looking at each element, this show is styled properly
    styledShows.push(show);
  });

  return styledShows;
}

console.log(styleShows(shows, periodicTable));
