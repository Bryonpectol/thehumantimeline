const events = [{"year":"4000 B.C.","events":"- The Sumerian civilization emerges in Mesopotamia (modern-day Iraq)."},
                {"year":"3100 B.C.","events":"- The first Egyptian dynasty is established by Narmer (Menes), uniting Upper and Lower Egypt."},
                {"year":"2500 B.C.","events":"- The Great Pyramid of Giza is built in Egypt."}];


let container = document.getElementById("timelinemain");

events.forEach((Events) => {

    let Year = document.createElement("h3");
    let Event = document.createElement("p");
    let eventDiv = document.createElement("div");

    eventDiv.className = "eventdiv";

    Year.textContent = "Year: " + Events.year;
    Event.textContent = "" + Events.events;

    container.appendChild(eventDiv);
    eventDiv.appendChild(Year);
    eventDiv.appendChild(Event);

});
