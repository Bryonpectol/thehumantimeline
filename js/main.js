const events = [
  {"year":"1258","time":"A.D.","image":"","events":""},
  {"year":"1248-1254","time":"A.D.","image":"","events":""},
  {"year":"1240","time":"A.D.","image":"","events":""},
  {"year":"1230","time":"A.D.","image":"","events":""},
  {"year":"1228-1229","time":"A.D.","image":"","events":""},
  {"year":"1227","time":"A.D.","image":"","events":""},
  {"year":"1219","time":"A.D.","image":"","events":""},
  {"year":"1215","time":"A.D.","image":"","events":""},
  {"year":"1209","time":"A.D.","image":"","events":""},
  {"year":"1204","time":"A.D.","image":"","events":""},
  {"year":"1199","time":"A.D.","image":"","events":""},
  {"year":"1187","time":"A.D.","image":"","events":""},
  {"year":"1170","time":"A.D.","image":"","events":""},
  {"year":"1154","time":"A.D.","image":"","events":""},
  {"year":"1147-1149","time":"A.D.","image":"","events":""},
  {"year":"1139","time":"A.D.","image":"","events":""},
  {"year":"1122","time":"A.D.","image":"","events":""},
  {"year":"1100","time":"A.D.","image":"","events":""},
  {"year":"1096-1099","time":"A.D.","image":"","events":""},
  {"year":"1095","time":"A.D.","image":"","events":""},
  {"year":"1071","time":"A.D.","image":"","events":""},
  {"year":"1066","time":"A.D.","image":"","events":""},
  {"year":"1054","time":"A.D.","image":"","events":""},
  {"year":"1014","time":"A.D.","image":"","events":""},
  {"year":"1000","time":"A.D.","image":"","events":""},
  {"year":"987","time":"A.D.","image":"","events":""},
  {"year":"911","time":"A.D.","image":"","events":""},
  {"year":"879","time":"A.D.","image":"","events":""},
  {"year":"843","time":"A.D.","image":"","events":""},
  {"year":"800","time":"A.D.","image":"","events":""},
  {"year":"732","time":"A.D.","image":"","events":""},
  {"year":"711","time":"A.D.","image":"","events":""},
  {"year":"632","time":"A.D.","image":"","events":""},
  {"year":"622","time":"A.D.","image":"","events":""},
  {"year":"589","time":"A.D.","image":"","events":""},
  {"year":"527","time":"A.D.","image":"","events":""},
  {"year":"500","time":"A.D.","image":"","events":""},
  {"year":"476","time":"A.D.","image":"","events":""},
  {"year":"337","time":"A.D.","image":"","events":""},
  {"year":"325","time":"A.D.","image":"","events":""},
  {"year":"313","time":"A.D.","image":"","events":""},
  {"year":"312","time":"A.D.","image":"","events":""},
  {"year":"305","time":"A.D.","image":"","events":""},
  {"year":"300","time":"A.D.","image":"","events":""},
  {"year":"284","time":"A.D.","image":"","events":""},
  {"year":"251-266","time":"A.D.","image":"","events":""},
  {"year":"250","time":"A.D.","image":"","events":""},
  {"year":"235","time":"A.D.","image":"","events":"The Severan Dynasty in the Roman Empire ends, leading to a period of political instability known as the Crisis of the Third Century."},
  {"year":"226","time":"A.D.","image":"","events":"Cao Pi establishes the Wei Dynasty, marking the beginning of the Three Kingdoms period in China."},
  {"year":"220","time":"A.D.","image":"","events":"The Eastern Han Dynasty in China collapses, marking the end of the Han Dynasty period."},
  {"year":"212","time":"A.D.","image":"","events":"Emperor Caracalla grants Roman citizenship to all free inhabitants of the empire through the Constitutio Antoniniana."},
  {"year":"184","time":"A.D.","image":"","events":"The Yellow Turban Rebellion breaks out in China, leading to widespread unrest and instability during the late Eastern Han Dynasty."},
  {"year":"180","time":"A.D.","image":"","events":"Marcus Aurelius dies, and his son Commodus succeeds him as the Roman emperor."},
  {"year":"166-180","time":"A.D.","image":"","events":"The Roman Empire faces conflicts with Germanic tribes in the Marcomannic Wars."},
  {"year":"161","time":"A.D.","image":"","events":"Emperor Antoninus Pius dies, and Marcus Aurelius becomes the Roman emperor."},
  {"year":"122-135","time":"A.D.","image":"","events":"The Bar Kokhba revolt occurs in Judea against Roman rule."},
  {"year":"117","time":"A.D.","image":"","events":"Emperor Trajan dies, and Hadrian becomes the new Roman emperor."},
  {"year":"112","time":"A.D.","image":"","events":"Construction of the Hadrian's Wall begins in Britain under Emperor Hadrian."},
  {"year":"105","time":"A.D.","image":"","events":"The Dacian Wars begin as Emperor Trajan launches military campaigns against the Dacians in modern-day Romania."},
  {"year":"100","time":"A.D.","image":"","events":"1: The Han Dynasty continues to rule in China under Emperor He. 2: The Roman Empire reaches its greatest territorial extent under Emperor Trajan."},
  {"year":"98","time":"A.D.","image":"","events":"Emperor Nerva dies, and Trajan becomes the Roman emperor."},
  {"year":"96","time":"A.D.","image":"","events":"Emperor Domitian is assassinated, and Nerva becomes the Roman emperor, beginning the period known as the Nerva-Antonine dynasty."},
  {"year":"80","time":"A.D.","image":"","events":"Emperor Vespasian dies, and his son Titus becomes the new Roman emperor."},
  {"year":"79","time":"A.D.","image":"","events":"The eruption of Mount Vesuvius leads to the destruction of Pompeii and Herculaneum."},
  {"year":"66-73","time":"A.D.","image":"","events":"The First Jewish-Roman War takes place, resulting in the destruction of the Second Temple in Jerusalem."},
  {"year":"64","time":"A.D.","image":"","events":"The Great Fire of Rome occurs, leading to accusations against Christians and the persecution of them by Emperor Nero."},
  {"year":"49-51","time":"A.D.","image":"","events":"The Apostle Paul undertakes his missionary journeys, spreading Christianity throughout the eastern Mediterranean."},
  {"year":"43","time":"A.D.","image":"","events":"The Roman conquest of Britain begins under Emperor Claudius."},
  {"year":"37","time":"A.D.","image":"","events":"Tiberius dies, and Caligula becomes the third Roman emperor."},
  {"year":"30","time":"A.D.","image":"","events":"According to Christian tradition, Jesus is crucified and resurrected."},
  {"year":"14","time":"A.D.","image":"","events":"Augustus, the first Roman emperor, dies, and Tiberius succeeds him."},
  {"year":"9","time":"A.D.","image":"","events":"Germanic tribes, led by Arminius, defeat three Roman legions in the Battle of the Teutoburg Forest."},
  {"year":"1","time":"A.D.","image":"/images/1.jpg","events":"The year traditionally believed to be the birth of Jesus Christ."},
  {"year":"27","time":"B.C.","image":"","events":"The Roman Senate grants Octavian (Augustus) the title of Augustus, marking the beginning of the Roman Empire."},
  {"year":"44","time":"B.C.","image":"","events":"Julius Caesar is assassinated, leading to the rise of Augustus Caesar and the Roman Empire."},
  {"year":"146","time":"B.C.","image":"","events":"The Roman Republic destroys Carthage, ending the Third Punic War."},
  {"year":"221","time":"B.C.","image":"","events":"Qin Shi Huang becomes the first emperor of unified China, marking the start of the Qin Dynasty."},
  {"year":"323","time":"B.C.","image":"","events":"Alexander the Great dies, and his empire is divided among his generals, leading to the Hellenistic period."},
  {"year":"336","time":"B.C.","image":"","events":"Alexander the Great becomes the ruler of Macedon."},
  {"year":"490","time":"B.C.","image":"/images/490bc.jpg","events":"The Battle of Marathon takes place, where the Athenians defeat the Persian invasion."},
  {"year":"509","time":"B.C.","image":"","events":"The Roman Republic is established after the overthrow of the Roman monarchy."},
  {"year":"546","time":"B.C.","image":"","events":"Cyrus the Great establishes the Persian Empire after overthrowing the Median Empire."},
  {"year":"586","time":"B.C.","image":"","events":"The Babylonians, led by Nebuchadnezzar II, conquer Jerusalem and exile the Israelites."},
  {"year":"753","time":"B.C.","image":"","events":"According to Roman mythology, Romulus founds the city of Rome, marking the beginning of the Roman Empire."},
  {"year":"1200","time":"B.C.","image":"","events":"The collapse of the Bronze Age civilizations, including the Hittites, Mycenaeans, and the fall of Troy."},
  {"year":"1792","time":"B.C.","image":"","events":"Hammurabi becomes the ruler of Babylon and later establishes the Code of Hammurabi, one of the earliest known legal codes."},
  {"year":"2500","time":"B.C.","image":"","events":"The Great Pyramid of Giza is built in Egypt."},
  {"year":"3100","time":"B.C.","image":"","events":"The first Egyptian dynasty is established by Narmer (Menes), uniting Upper and Lower Egypt."},
  {"year":"4000","time":"B.C.","image":"","events":"The Sumerian civilization emerges in Mesopotamia (modern-day Iraq)."},
  {"year":"10,000","time":"B.C.","image":"/images/10000bc.jpg","events":"Humanity was still in the prehistoric era, known as the Stone Age."},
  ];


let searchInput = document.getElementById("search");
let Form = document.getElementById("form");
let Select = document.getElementById("select");

let selectValue = Select.value;
let selextText = Select.options[Select.selectedIndex].text;

if(selectValue == 1) {

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

    Year.textContent = "Year: " + Events.year + " " + Events.time;
    Event.textContent = "" + Events.events;
    Image.setAttribute("src", Events.image);

    container.appendChild(eventDiv);
    eventDiv.appendChild(Year);
    eventDiv.appendChild(Event);
    eventDiv.appendChild(Image);

});

};


if(selectValue == 2) {

events.reversed();

alert(events);

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

    Year.textContent = "Year: " + Events.year + " " + Events.time;
    Event.textContent = "" + Events.events;
    Image.setAttribute("src", Events.image);

    container.appendChild(eventDiv);
    eventDiv.appendChild(Year);
    eventDiv.appendChild(Event);
    eventDiv.appendChild(Image);

});

};



let searchYearReal;

function submit() {
  searchYearReal = "";
  let searchYear = document.createElement("p");
  searchYearReal = document.createElement("p");

  let filteredTime = JSON.stringify(events.filter((itemTime) => itemTime.time.includes(searchInput.value)));
  
  searchYear.textContent = "Searched for: Year " + searchInput.value + " " + filteredTime;

  let filteredItems = JSON.stringify(events.filter((item) => item.year.includes(searchInput.value)));

  let strung = filteredItems.split(":").pop();
  strung = strung.substring(0, strung.length - 2);
  //let jsoned = JSON.stringify(filteredItems);
    //let filteredItems = events.filter((item) => item.year = (searchInput.value));
  searchYearReal.textContent = "" + strung;

  Form.appendChild(searchYear);
  Form.appendChild(searchYearReal);
};
