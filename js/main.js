const events = [{"year":"490 B.C.","image":"","events":"The Battle of Marathon takes place, where the Athenians defeat the Persian invasion."},
  {"year":"509 B.C.","image":"","events":"The Roman Republic is established after the overthrow of the Roman monarchy."},
  {"year":"546 B.C.","image":"","events":"Cyrus the Great establishes the Persian Empire after overthrowing the Median Empire."},
  {"year":"586 B.C.","image":"","events":"The Babylonians, led by Nebuchadnezzar II, conquer Jerusalem and exile the Israelites."},
  {"year":"753 B.C.","image":"","events":"According to Roman mythology, Romulus founds the city of Rome, marking the beginning of the Roman Empire."},
  {"year":"1200 B.C.","image":"","events":"The collapse of the Bronze Age civilizations, including the Hittites, Mycenaeans, and the fall of Troy."},
  {"year":"1792 B.C.","image":"","events":"Hammurabi becomes the ruler of Babylon and later establishes the Code of Hammurabi, one of the earliest known legal codes."},
  {"year":"2500 B.C.","image":"","events":"The Great Pyramid of Giza is built in Egypt."},
  {"year":"3100 B.C.","image":"","events":"The first Egyptian dynasty is established by Narmer (Menes), uniting Upper and Lower Egypt."},
  {"year":"4000 B.C.","image":"","events":"The Sumerian civilization emerges in Mesopotamia (modern-day Iraq)."},
  {"year":"10,000 B.C.","image":"","events":"Humanity was still in the prehistoric era, known as the Stone Age."},
  ];


let container = document.getElementById("timelinemain");

events.forEach((Events) => {

    let Year = document.createElement("h3");
    let Event = document.createElement("p");
    let eventDiv = document.createElement("div");
    let Image = document.createElement("img");

    eventDiv.className = "eventdiv";
    Event.className = "eventtext";
    Year.className = "yeartext";
    Image.className = "image";

    Year.textContent = "Year: " + Events.year;
    Event.textContent = "" + Events.events;
    Image.setAttribute("src", Events.image);

    container.appendChild(eventDiv);
    eventDiv.appendChild(Year);
    eventDiv.appendChild(Event);

});
