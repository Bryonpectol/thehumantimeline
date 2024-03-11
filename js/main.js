const events = [
  {"year":"49-51","image":"","events":"The Apostle Paul undertakes his missionary journeys, spreading Christianity throughout the eastern Mediterranean."},
  {"year":"43","image":"","events":"The Roman conquest of Britain begins under Emperor Claudius."},
  {"year":"37","image":"","events":"Tiberius dies, and Caligula becomes the third Roman emperor."},
  {"year":"30","image":"","events":"According to Christian tradition, Jesus is crucified and resurrected."},
  {"year":"14","image":"","events":"Augustus, the first Roman emperor, dies, and Tiberius succeeds him."},
  {"year":"9","image":"","events":"Germanic tribes, led by Arminius, defeat three Roman legions in the Battle of the Teutoburg Forest."},
  {"year":"1","image":"/images/1.jpg","events":"The year traditionally believed to be the birth of Jesus Christ."},
  {"year":"27 B.C.","image":"","events":"The Roman Senate grants Octavian (Augustus) the title of Augustus, marking the beginning of the Roman Empire."},
  {"year":"44 B.C.","image":"","events":"Julius Caesar is assassinated, leading to the rise of Augustus Caesar and the Roman Empire."},
  {"year":"146 B.C.","image":"","events":"The Roman Republic destroys Carthage, ending the Third Punic War."},
  {"year":"221 B.C.","image":"","events":"Qin Shi Huang becomes the first emperor of unified China, marking the start of the Qin Dynasty."},
  {"year":"323 B.C.","image":"","events":"Alexander the Great dies, and his empire is divided among his generals, leading to the Hellenistic period."},
  {"year":"336 B.C.","image":"","events":"Alexander the Great becomes the ruler of Macedon."},
  {"year":"490 B.C.","image":"/images/490bc.jpg","events":"The Battle of Marathon takes place, where the Athenians defeat the Persian invasion."},
  {"year":"509 B.C.","image":"","events":"The Roman Republic is established after the overthrow of the Roman monarchy."},
  {"year":"546 B.C.","image":"","events":"Cyrus the Great establishes the Persian Empire after overthrowing the Median Empire."},
  {"year":"586 B.C.","image":"","events":"The Babylonians, led by Nebuchadnezzar II, conquer Jerusalem and exile the Israelites."},
  {"year":"753 B.C.","image":"","events":"According to Roman mythology, Romulus founds the city of Rome, marking the beginning of the Roman Empire."},
  {"year":"1200 B.C.","image":"","events":"The collapse of the Bronze Age civilizations, including the Hittites, Mycenaeans, and the fall of Troy."},
  {"year":"1792 B.C.","image":"","events":"Hammurabi becomes the ruler of Babylon and later establishes the Code of Hammurabi, one of the earliest known legal codes."},
  {"year":"2500 B.C.","image":"","events":"The Great Pyramid of Giza is built in Egypt."},
  {"year":"3100 B.C.","image":"","events":"The first Egyptian dynasty is established by Narmer (Menes), uniting Upper and Lower Egypt."},
  {"year":"4000 B.C.","image":"","events":"The Sumerian civilization emerges in Mesopotamia (modern-day Iraq)."},
  {"year":"10,000 B.C.","image":"/images/10000bc.jpg","events":"Humanity was still in the prehistoric era, known as the Stone Age."},
  ];


let searchInput = document.getElementById("search");
let Form = document.getElementById("form");
let Select = document.getElementById("select");

let selectValue = Select.value;
let selextText = Select.options[Select.selectedIndex].text;

if(selectValue == 2) {
  events.reversed();
};

if(selectValue == 1) {
  
};

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
    eventDiv.appendChild(Image);

});

let searchYearReal;

function submit() {
  searchYearReal = "";
  let searchYear = document.createElement("p");
  searchYearReal = document.createElement("p");
  
  searchYear.textContent = "Searched for: Year " + searchInput.value;

  let filteredItems = JSON.stringify(events.filter((item) => item.year.includes(searchInput.value)));

  let strung = filteredItems.split(":").pop();
  strung = strung.substring(0, strung.length - 2);
  //let jsoned = JSON.stringify(filteredItems);
    //let filteredItems = events.filter((item) => item.year = (searchInput.value));
  searchYearReal.textContent = "" + strung;

  Form.appendChild(searchYear);
  Form.appendChild(searchYearReal);
};
