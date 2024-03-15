const events = [
  {"year":"1503","time":"A.D.","image":"/images/mona-lisa.jpg","events":"Leonardo da Vinci begins painting the Mona Lisa, which becomes one of the most famous works of art in history."},
  {"year":"1498","time":"A.D.","image":"","events":"Vasco da Gama, a Portuguese explorer, reaches India by sea, establishing a direct trade route from Europe to Asia."},
  {"year":"1492","time":"A.D.","image":"","events":"1: Christopher Columbus, sponsored by Spain, makes his first voyage across the Atlantic and reaches the Americas, initiating European exploration and colonization of the New World. 2: The Spanish Crown, under King Ferdinand II of Aragon and Queen Isabella I of Castile, completes the Reconquista, the campaign to recapture Spain from the Moors."},
  {"year":"1455-1485","time":"A.D.","image":"","events":"The Wars of the Roses occur in England, a series of civil wars between the houses of York and Lancaster for control of the English throne."},
  {"year":"1453","time":"A.D.","image":"","events":"The Byzantine Empire falls to the Ottoman Empire as Constantinople (present-day Istanbul) is captured by Mehmed the Conqueror, marking the end of the Byzantine Empire."},
  {"year":"1431","time":"A.D.","image":"/images/joan.jpg","events":"Joan of Arc, the French military leader and martyr, is burned at the stake for heresy."},
  {"year":"1415","time":"A.D.","image":"","events":"The Battle of Agincourt takes place during the Hundred Years' War, resulting in a major English victory against the French."},
  {"year":"1401","time":"A.D.","image":"","events":"The Yongle Emperor of China commissions the construction of the Forbidden City in Beijing."},
  {"year":"1396","time":"A.D.","image":"","events":"The Battle of Nicopolis takes place between the Crusader army and the Ottoman Empire, resulting in a decisive Ottoman victory."},
  {"year":"1392","time":"A.D.","image":"","events":"The Joseon Dynasty is established in Korea, following the overthrow of the Goryeo Dynasty."},
  {"year":"1386","time":"A.D.","image":"","events":"The Union of Krewo is signed, uniting the Kingdom of Poland and the Grand Duchy of Lithuania under a personal union."},
  {"year":"1381","time":"A.D.","image":"","events":"The Peasants' Revolt takes place in England, as a response to social and economic unrest, led by Wat Tyler and other rebel leaders."},
  {"year":"1378-1417","time":"A.D.","image":"","events":"The Western Schism, a split within the Catholic Church, leads to multiple claimants to the papacy and a period of ecclesiastical turmoil."},
  {"year":"1368-1644","time":"A.D.","image":"","events":"The Ming Dynasty is established in China, following the overthrow of the Mongol-led Yuan Dynasty."},
  {"year":"1347-1351","time":"A.D.","image":"/images/plague.jpg","events":"The Black Death, a devastating pandemic caused by the bubonic plague, spreads across Europe, resulting in the deaths of millions of people."},
  {"year":"1337-1453","time":"A.D.","image":"/images/100war.jpg","events":"The Hundred Years' War begins between England and France, with intermittent conflicts and periods of peace throughout the duration."},
  {"year":"1324-1325","time":"A.D.","image":"","events":"Mansa Musa, the ruler of the Mali Empire, makes his famous pilgrimage to Mecca, showcasing the wealth of his empire and spreading awareness of West African civilization."},
  {"year":"1307","time":"A.D.","image":"","events":"King Philip IV of France orders the arrest and suppression of the Knights Templar."},
  {"year":"1302","time":"A.D.","image":"","events":"The Battle of Courtrai takes place during the Franco-Flemish War, resulting in a victory for the Flemish militia against the French knights."},
  {"year":"1299","time":"A.D.","image":"","events":"Osman I founds the Ottoman Empire in Anatolia, marking the beginning of a powerful Islamic state."},
  {"year":"1291","time":"A.D.","image":"","events":"The Crusader states in the Holy Land, including the last remaining stronghold of Acre, fall to Muslim forces, effectively ending the Crusades."},
  {"year":"1274","time":"A.D.","image":"","events":"The Mongol invasions of Japan, known as the Kamikaze (divine wind), are thwarted by typhoons."},
  {"year":"1271-1295","time":"A.D.","image":"","events":"Marco Polo, the Italian explorer, travels to China and serves in the court of Kublai Khan."},
  {"year":"1260","time":"A.D.","image":"","events":"The Battle of Ain Jalut takes place in present-day Israel, where the Mongols are defeated by the Mamluks, halting their westward expansion."},
  {"year":"1258","time":"A.D.","image":"","events":"The Mongols capture and sack Baghdad, effectively ending the Abbasid Caliphate."},
  {"year":"1248-1254","time":"A.D.","image":"","events":"The Seventh Crusade is led by Louis IX of France, who is captured during the campaign."},
  {"year":"1240","time":"A.D.","image":"","events":"The Mongols, led by Batu Khan, invade and conquer Russia, establishing the Golden Horde."},
  {"year":"1230","time":"A.D.","image":"","events":"The Inquisition is established by Pope Gregory IX to combat heresy within the Catholic Church."},
  {"year":"1228-1229","time":"A.D.","image":"","events":"The Sixth Crusade takes place, led by Holy Roman Emperor Frederick II, resulting in a peaceful transfer of control of Jerusalem to Christian forces."},
  {"year":"1227","time":"A.D.","image":"/images/ghengis.jpg","events":"Genghis Khan, the founder and leader of the Mongol Empire, dies."},
  {"year":"1219","time":"A.D.","image":"","events":"The Fifth Crusade begins, focusing on the reconquest of Jerusalem but ultimately failing to achieve its objective."},
  {"year":"1215","time":"A.D.","image":"","events":"King John of England signs the Magna Carta, limiting the power of the monarchy and establishing the principle of the rule of law."},
  {"year":"1209","time":"A.D.","image":"","events":"Genghis Khan and his descendants launched progressive invasions of China, subjugating the Western Xia."},
  {"year":"1204","time":"A.D.","image":"","events":"The Fourth Crusade, originally intended to recapture Jerusalem, results in the sack of Constantinople by the Crusader forces."},
  {"year":"1199","time":"A.D.","image":"","events":"Richard I (Richard the Lionheart) dies, and his brother John becomes the King of England."},
  {"year":"1187","time":"A.D.","image":"","events":"Saladin, the Muslim military leader, captures Jerusalem from the Crusaders, sparking the Third Crusade."},
  {"year":"1170","time":"A.D.","image":"","events":"Thomas Becket, the Archbishop of Canterbury, is murdered in Canterbury Cathedral by followers of King Henry II."},
  {"year":"1154","time":"A.D.","image":"","events":"Henry II becomes the King of England, marking the beginning of the Plantagenet dynasty."},
  {"year":"1147-1149","time":"A.D.","image":"","events":"The Second Crusade takes place, led by European monarchs and aimed at recapturing the city of Edessa from Muslim forces."},
  {"year":"1139","time":"A.D.","image":"","events":"The Second Lateran Council is held in Rome, where the Catholic Church issues decrees against simony and defines laws on clerical celibacy."},
  {"year":"1122","time":"A.D.","image":"","events":"The Concordat of Worms is signed, resolving the Investiture Controversy between the Papacy and the Holy Roman Empire."},
  {"year":"1100","time":"A.D.","image":"","events":"Henry I becomes the King of England after the death of his brother William II."},
  {"year":"1096-1099","time":"A.D.","image":"","events":"The First Crusade takes place, resulting in the capture of Jerusalem by Christian forces and the establishment of Crusader states in the Levant."},
  {"year":"1095","time":"A.D.","image":"","events":"Pope Urban II calls for the First Crusade at the Council of Clermont, leading to a series of military campaigns by Western European Christians to reclaim the Holy Land."},
  {"year":"1071","time":"A.D.","image":"","events":"The Battle of Manzikert occurs, where the Seljuk Turks defeat the Byzantine Empire, leading to the loss of Anatolia."},
  {"year":"1066","time":"A.D.","image":"","events":"1: The Battle of Hastings takes place in England, where William the Conqueror of Normandy defeats King Harold II, leading to Norman conquest of England. 2: The Bayeux Tapestry is created, depicting the events leading up to the Norman Conquest."},
  {"year":"1054","time":"A.D.","image":"","events":"The Great Schism occurs, leading to the permanent split between the Eastern Orthodox Church and the Roman Catholic Church."},
  {"year":"1014","time":"A.D.","image":"","events":"The Battle of Clontarf takes place in Ireland, resulting in a victory for Brian Boru and the defeat of Viking forces."},
  {"year":"1000","time":"A.D.","image":"/images/leif.jpg","events":"1: The Hungarian king, Stephen I, is crowned as the first Christian king of Hungary. 2: Leif Erikson, a Norse explorer, reaches North America, possibly becoming the first European to do so. He establishes a settlement in Vinland (possibly modern-day Newfoundland, Canada)."},
  {"year":"987","time":"A.D.","image":"","events":"Hugh Capet is crowned as the King of France, establishing the Capetian Dynasty and the beginning of modern France."},
  {"year":"911","time":"A.D.","image":"","events":"The Carolingian Empire officially ends with the death of Louis the Child, and the feudal system gains prominence in Europe."},
  {"year":"879","time":"A.D.","image":"","events":"Prince Oleg establishes the Kievan Rus' state in Eastern Europe, with Novgorod as its capital."},
  {"year":"843","time":"A.D.","image":"","events":"The Treaty of Verdun is signed, dividing the Carolingian Empire into three parts, marking the beginning of the Carolingian fragmentation."},
  {"year":"800","time":"A.D.","image":"","events":"Charlemagne is crowned as the Holy Roman Emperor by Pope Leo III, marking the revival of the Western Roman Empire."},
  {"year":"732","time":"A.D.","image":"","events":"The Battle of Tours takes place in France, where Charles Martel defeats the Muslim forces, halting the Muslim advance into Europe."},
  {"year":"711","time":"A.D.","image":"","events":"Muslim forces under Tariq ibn Ziyad invade and conquer most of the Iberian Peninsula."},
  {"year":"632","time":"A.D.","image":"","events":"Muhammad dies, and the Rashidun Caliphate is established, leading to the expansion of Islam."},
  {"year":"622","time":"A.D.","image":"","events":"The Islamic prophet Muhammad and his followers migrate from Mecca to Medina, marking the beginning of the Islamic calendar."},
  {"year":"589","time":"A.D.","image":"","events":"The Sui Dynasty is established in China, reuniting the country after centuries of division."},
  {"year":"527","time":"A.D.","image":"","events":"Byzantine Emperor Justinian I comes to power, initiating a period of significant legal, cultural, and architectural reforms."},
  {"year":"500","time":"A.D.","image":"","events":"The Gupta Empire in India begins to decline."},
  {"year":"476","time":"A.D.","image":"","events":"The Western Roman Empire falls, marking the end of ancient Rome and the beginning of the Middle Ages."},
  {"year":"337","time":"A.D.","image":"","events":"Emperor Constantine the Great dies, and the Roman Empire is divided among his sons, leading to the decline of the unified empire."},
  {"year":"325","time":"A.D.","image":"","events":"The First Council of Nicaea takes place, establishing the Nicene Creed and defining orthodox Christian doctrine."},
  {"year":"313","time":"A.D.","image":"","events":"Emperor Constantine the Great issues the Edict of Milan, granting religious toleration to Christianity in the Roman Empire."},
  {"year":"312","time":"A.D.","image":"","events":"Roman Emperor Constantine I has a vision of the Chi-Rho symbol and subsequently converts to Christianity."},
  {"year":"305","time":"A.D.","image":"","events":"Diocletian abdicates as Roman emperor, leading to the Tetrarchy system of governance."},
  {"year":"300","time":"A.D.","image":"","events":"The Gupta Empire begins to rise in northern India under Emperor Chandragupta I."},
  {"year":"284","time":"A.D.","image":"","events":"Diocletian becomes the Roman emperor, initiating a series of reforms to stabilize the empire."},
  {"year":"251-266","time":"A.D.","image":"","events":"The Palmyrene Empire, under Queen Zenobia, briefly breaks away from Roman rule in the eastern part of the empire."},
  {"year":"250","time":"A.D.","image":"","events":"The Decian persecution of Christians begins in the Roman Empire."},
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
    //container.appendChild(Vert);
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
   // container.appendChild(Vert);
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
