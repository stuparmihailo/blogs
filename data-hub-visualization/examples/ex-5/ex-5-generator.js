var counter = 0;

generateData = function() {

    // dummy trip manualy created though Munic. Trip is consisted of 24 points, and at the end of the trip first point is resend
    // This repetition task will not be displayed on map because the marker from the first round will be already visible
    
    // format = lng,lat;lng,lat;lng,lat
    var data = "11.55934,48.14905;11.55949,48.14948;11.55968,48.14997;11.56023,48.14981;11.56085,48.14964;11.56147,48.14946;11.56209,48.14928;11.56271,48.14911;11.56333,48.14893;11.56395,48.14875;11.56457,48.14858;11.56519,48.1484;11.56587,48.14821;11.5665,48.14804;11.56705,48.14788;11.56767,48.14771;11.56793,48.14743;11.56764,48.14699;11.56739,48.14661;11.56712,48.14619;11.56686,48.14578;11.56668,48.14539;11.5673,48.14522;11.56793,48.14505";
    var gpsPoints = data.split(";");
    
    if (counter >= gpsPoints.length) {
        counter = 0;
    }
    
    var gps = gpsPoints[counter];
    return gps;
};

$.addTimer("500ms",doTick);     // Generate new gps point every 500ms

function doTick(ctx) {
    $.output(generateData());
    counter++;

}
