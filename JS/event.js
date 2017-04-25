var event = (function() {
    var eventObject = {}; //self contained array, events.set(filtered) passes our filtered array in
    var filteredBands = [];

    // cache DOM
    var $el = $('#output'); //the area where the info is gonna be displayed
    var $insert = $el.find('#insert-event'); //
    var template = Handlebars.compile($el.find('#event-template').html()); //the template the html adheres to

    // bind events
    function render() {
        $insert.html(template(eventObject)); //inserts into template, in {{#each this}} it is THIS
    }

    function setEvent(data) {
        eventObject = data; //events array become the filtered array

        loop();
        console.log(filteredBands);

        render();
    }

    function loop() {
        for (var i = 0; i < filtered.bands.length; i++) {
            filteredBands = bandData.filter(function(item) { //item is one of the values of 'data' e.g data[0]
                return item.id == filtered.bands[i].id;
            })[0];
        }
    }



    return {
        set: setEvent //filtered into setEvents^
    };
})();

var eventId = window.location.hash.substr(1); //theIDofthepage after the rest of the URL


var filtered = data.filter(function(item) { //item is one of the values of 'data' e.g data[0]
    return item.id == eventId;
})[0];


event.set(filtered);

// for loop over filtered.bands
// then a filter on bandData




// get the id from the url
// filter by id
// event.set(filtered);


// ajax function here
// in this case you'd pass the eventId to the ajax
// the ajax will give you the correct event

// but, because you don't have a server
// you need to create a local database, and filter it
