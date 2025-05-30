const events = [
  {"id":"1","year":"2025","time":"A.D.","image":"","events":"Donald Trump is elected again as the President of the United States, becoming the 47th President.","more":""},
  {"id":"1","year":"2024","time":"A.D.","image":"/images/trumpassassination.jpg","events":"Donald Trump is hit in the ear with a bullet from an assassination attempt during a campaign rally.","more":""},
  {"id":"1","year":"2023","time":"A.D.","image":"","events":"Artificial Intelligence becomes 10 times more advanced with the new version of ChatGPT 3.","more":""},
  {"id":"1","year":"2022","time":"A.D.","image":"","events":"The world population hits 8 billion.","more":""},
  {"id":"0","year":"2020","time":"A.D.","image":"","events":"1. The Black Lives Matter movement gains momentum following the killing of George Floyd, leading to widespread protests against racial injustice and police brutality.\n\n2. The United Kingdom officially exits the European Union.","more":""},
  {"id":"1","year":"2019","time":"A.D.","image":"/images/covid.jpg","events":"The COVID-19 pandemic emerges, causing a global health crisis with significant social, economic, and political impacts.","more":""},
  {"id":"2","year":"2016","time":"A.D.","image":"","events":"1. The United Kingdom votes to leave the European Union in the Brexit referendum.\n\n2. Donald Trump is elected as the 45th President of the United States.","more":""},
  {"id":"3","year":"2014","time":"A.D.","image":"","events":"The Islamic State of Iraq and Syria (ISIS) declares a caliphate, sparking a major international effort to combat the terrorist group.","more":""},
  {"id":"4","year":"2013","time":"A.D.","image":"","events":"Pope Francis is elected as the head of the Roman Catholic Church, becoming the first pope from the Americas.","more":""},
  {"id":"5","year":"2011","time":"A.D.","image":"/images/osama.jpg","events":"1. Osama bin Laden, the founder and leader of al-Qaeda, is killed by United States forces in Pakistan.\n\n2. The Syrian Civil War begins, leading to a complex and ongoing conflict with significant humanitarian consequences.","more":""},
  {"id":"6","year":"2010","time":"A.D.","image":"","events":"The Arab Spring movement begins, with widespread protests and uprisings taking place across the Middle East and North Africa.","more":""},
  {"id":"7","year":"2008","time":"A.D.","image":"","events":"The global financial crisis begins with the collapse of Lehman Brothers, leading to a worldwide economic downturn.","more":""},
  {"id":"8","year":"2004","time":"A.D.","image":"/images/2004tsunami.jpg","events":"The Indian Ocean earthquake and tsunami occur, resulting in the deaths of hundreds of thousands of people in multiple countries.","more":""},
  {"id":"9","year":"2003","time":"A.D.","image":"","events":"The United States and its allies invade Iraq, leading to the overthrow of Saddam Hussein's regime.","more":""},
  {"id":"10","year":"2001","time":"A.D.","image":"/images/911.jpg","events":"September 11 attacks take place in the United States, resulting in the destruction of the World Trade Center towers and leading to global efforts to combat terrorism.","more":""},
  {"id":"11","year":"1991","time":"A.D.","image":"","events":"The Soviet Union dissolves, leading to the emergence of independent countries in its place.","more":""},
  {"id":"12","year":"1989","time":"A.D.","image":"","events":"The fall of the Berlin Wall marks the beginning of the reunification of East and West Germany.","more":""},
  {"id":"12","year":"1986","time":"A.D.","image":"","events":"The Number Four RBMK reactor at the nuclear power plant at Chernobyl, Ukraine, went out of control during a test at low-power, leading to an explosion and fire that demolished the reactor building and released large amounts of radiation into the atmosphere.","more":""},
  {"id":"12","year":"1977","time":"A.D.","image":"","events":"Star Wars, one of the defining motion pictures in cinema history, was released in theaters.","more":""},
  {"id":"13","year":"1969","time":"A.D.","image":"","events":"The United States successfully lands astronauts on the moon during the Apollo 11 mission.","more":""},
  {"id":"1","year":"1963","time":"A.D.","image":"","events":"President John F. Kennedy is assassinated while riding in a motorcade through Dallas, Texas.","more":""},
  {"id":"14","year":"1961","time":"A.D.","image":"","events":"The Berlin Wall is constructed, dividing East and West Berlin, symbolizing the division between Eastern and Western blocs during the Cold War.","more":""},
  {"id":"15","year":"1950","time":"A.D.","image":"","events":"The Korean War starts. Between North Korea, supported by China and the Soviet Union, and South Korea, supported by a United Nations coalition led by the United States.","more":""},
  {"id":"17","year":"1947","time":"A.D.","image":"","events":"1. The Cold War begins, a period of political tension and ideological rivalry between the United States and the Soviet Union.\n\n2. India and Pakistan gain independence from British colonial rule.","more":""},
  {"id":"18","year":"1945","time":"A.D.","image":"","events":"1. The United States of America drops two atomic bombs on Hiroshima and Nagasaki, Japan.\n\n2. The United Nations is founded with the goal of promoting international cooperation and preventing future conflicts.","more":""},
  {"id":"19","year":"1939","time":"A.D.","image":"","events":"World War II begins. Involving numerous countries and resulting in the Holocaust, widespread devastation, and the use of atomic weapons.","more":""},
  {"id":"20","year":"1929","time":"A.D.","image":"","events":"The Wall Street Crash occurs, marking the beginning of the Great Depression, a severe worldwide economic downturn.","more":""},
  {"id":"20","year":"1920","time":"A.D.","image":"","events":"The 19th Amendment was ratified, giving women the right to vote for the first time in the United States.","more":""},
  {"id":"21","year":"1918","time":"A.D.","image":"","events":"World War I ends with the signing of the Armistice, leading to significant political and territorial changes.","more":""},
  {"id":"22","year":"1917","time":"A.D.","image":"","events":"The Russian Revolution occurs, leading to the establishment of the Soviet Union.","more":""},
  {"id":"23","year":"1914","time":"A.D.","image":"","events":"World War I begins. Involving many nations and resulting in significant casualties and territorial changes.","more":""},
  {"id":"24","year":"1901","time":"A.D.","image":"","events":"Queen Victoria of the United Kingdom passes away, and her son Edward VII ascends to the throne.","more":""},
  {"id":"25","year":"1898","time":"A.D.","image":"","events":"The Spanish-American War takes place, resulting in the United States acquiring territories such as Puerto Rico, Guam, and the Philippines.","more":""},
  {"id":"26","year":"1893","time":"A.D.","image":"","events":"New Zealand becomes the first country in the world to grant women the right to vote in national elections.","more":""},
  {"id":"27","year":"1885","time":"A.D.","image":"","events":"The Berlin Conference takes place, where European powers divide Africa into colonies, leading to the Scramble for Africa.","more":""},
  {"id":"28","year":"1871","time":"A.D.","image":"","events":"The German Empire is established after the Prussian victory in the Franco-Prussian War, with Wilhelm I of Prussia becoming the first German Emperor.","more":""},
  {"id":"29","year":"1861","time":"A.D.","image":"","events":"The American Civil War begins. A conflict between the Northern states (Union) and the Southern states (Confederacy) over issues including slavery and states' rights.","more":""},
  {"id":"30","year":"1859","time":"A.D.","image":"","events":"Charles Darwin publishes 'On the Origin of Species', presenting the theory of evolution through natural selection.","more":""},
  {"id":"31","year":"1848","time":"A.D.","image":"","events":"The Revolutions of 1848 sweep across Europe, marked by widespread uprisings and demands for political and social reform.","more":""},
  {"id":"32","year":"1833","time":"A.D.","image":"","events":"The Slavery Abolition Act is passed in the British Empire, abolishing slavery throughout most of the British colonies.","more":""},
  {"id":"33","year":"1830","time":"A.D.","image":"","events":"The July Revolution in France leads to the overthrow of King Charles X and the establishment of the July Monarchy under King Louis-Philippe.","more":""},
  {"id":"34","year":"1815","time":"A.D.","image":"","events":"The Battle of Waterloo takes place, resulting in the defeat of Napoleon Bonaparte and the end of the Napoleonic Wars.","more":""},
  {"id":"35","year":"1807","time":"A.D.","image":"","events":"The British Parliament passes the Slave Trade Act, abolishing the slave trade throughout the British Empire.","more":""},
  {"id":"36","year":"1804","time":"A.D.","image":"","events":"Napoleon Bonaparte crowns himself Emperor of the French, establishing the First French Empire.","more":""},
  {"id":"37","year":"1799","time":"A.D.","image":"","events":"Napoleon Bonaparte becomes the First Consul of France, consolidating his power and eventually declaring himself Emperor.","more":""},
  {"id":"38","year":"1791","time":"A.D.","image":"","events":"The Bill of Rights, the first ten amendments to the United States Constitution, is ratified, guaranteeing fundamental rights and freedoms.","more":""},
  {"id":"39","year":"1789","time":"A.D.","image":"/images/french-rev.jpg","events":"The French Revolution commences with the storming of the Bastille, marking a period of radical political and social change in France.","more":""},
  {"id":"40","year":"1776","time":"A.D.","image":"/images/american-rev.jpg","events":"The American Revolution begins with the signing of the Declaration of Independence, leading to the war for American independence from Britain.","more":""},
  {"id":"41","year":"1770","time":"A.D.","image":"","events":"The Boston Massacre occurs, where British soldiers kill five colonists, fueling tensions between the American colonies and Britain.","more":""},
  {"id":"42","year":"1760","time":"A.D.","image":"","events":"The Industrial Revolution begins.","more":""},
  {"id":"43","year":"1754","time":"A.D.","image":"","events":"The French and Indian War begins. Involving conflicts between Britain and France over colonial territories in North America.","more":""},
  {"id":"44","year":"1707","time":"A.D.","image":"","events":"The Act of Union is passed, merging the Kingdom of England and the Kingdom of Scotland to form the Kingdom of Great Britain.","more":""},
  {"id":"45","year":"1701","time":"A.D.","image":"","events":"The War of the Spanish Succession begins, triggered by disputes over the Spanish throne.","more":""},
  {"id":"46","year":"1689","time":"A.D.","image":"","events":"The Bill of Rights is passed in England, guaranteeing certain civil liberties and establishing the supremacy of Parliament.","more":""},
  {"id":"47","year":"1688","time":"A.D.","image":"","events":"The Glorious Revolution in England begins. Resulting in the overthrow of King James II and the establishment of a constitutional monarchy under William III and Mary II.","more":""},
  {"id":"48","year":"1666","time":"A.D.","image":"","events":"The Great Fire of London devastates the city, destroying much of the medieval city and prompting significant urban redevelopment.","more":""},
  {"id":"49","year":"1665","time":"A.D.","image":"","events":"The Great Plague of London outbreak, causing a significant loss of life and impacting the city's population and economy.","more":""},
  {"id":"50","year":"1642","time":"A.D.","image":"","events":"The English Civil War starts and is fought between the Royalists, supporting King Charles I, and the Parliamentarians, resulting in the temporary overthrow of the monarchy and the establishment of the Commonwealth of England under Oliver Cromwell.","more":""},
  {"id":"51","year":"1620","time":"A.D.","image":"","events":"The Mayflower, carrying English Pilgrims seeking religious freedom, arrives in Plymouth, Massachusetts, marking the establishment of the Plymouth Colony.","more":""},
  {"id":"52","year":"1618","time":"A.D.","image":"","events":"The Thirty Years' War begins in Europe, involving multiple conflicts between various European powers and resulting in significant political and religious realignments.","more":""},
  {"id":"53","year":"1607","time":"A.D.","image":"","events":"The English establish the Jamestown colony in Virginia, marking the first permanent English settlement in North America.","more":""},
  {"id":"54","year":"1603","time":"A.D.","image":"","events":"The Tokugawa shogunate begins in Japan, establishing a centralized feudal government that will last for over 250 years.","more":""},
  {"id":"55","year":"1598","time":"A.D.","image":"","events":"King Henry IV of France issues the Edict of Nantes, granting religious toleration to French Protestants (Huguenots).","more":""},
  {"id":"56","year":"1596","time":"A.D.","image":"","events":"William Shakespeare's play 'Romeo and Juliet' is performed for the first time, becoming one of his most renowned works.","more":""},
  {"id":"57","year":"1588","time":"A.D.","image":"","events":"The Spanish Armada, a fleet sent by King Philip II of Spain, is defeated by the English navy, marking a significant turning point in European naval warfare and English supremacy.","more":""},
  {"id":"58","year":"1543","time":"A.D.","image":"","events":"Nicolaus Copernicus publishes 'De Revolutionibus Orbium Coelestium', proposing the heliocentric model of the solar system.","more":""},
  {"id":"59","year":"1533","time":"A.D.","image":"","events":"Henry VIII of England separates from the Roman Catholic Church and establishes the Church of England, with himself as the head, in order to obtain an annulment from his first marriage.","more":""},
  {"id":"60","year":"1519","time":"A.D.","image":"","events":"Ferdinand Magellan's expedition becomes the first to circumnavigate the globe, although Magellan himself dies during the journey.","more":""},
  {"id":"61","year":"1517","time":"A.D.","image":"","events":"Martin Luther's Ninety-Five Theses are posted on the door of the Castle Church in Wittenberg, Germany, marking the beginning of the Protestant Reformation.","more":""},
  {"id":"62","year":"1503","time":"A.D.","image":"/images/mona-lisa.jpg","events":"Leonardo da Vinci begins painting the Mona Lisa, which becomes one of the most famous works of art in history.","more":""},
  {"id":"63","year":"1498","time":"A.D.","image":"","events":"Vasco da Gama, a Portuguese explorer, reaches India by sea, establishing a direct trade route from Europe to Asia.","more":""},
  {"id":"64","year":"1492","time":"A.D.","image":"","events":"1. Christopher Columbus, sponsored by Spain, makes his first voyage across the Atlantic and reaches the Americas, initiating European exploration and colonization of the New World.\n\n2. The Spanish Crown, under King Ferdinand II of Aragon and Queen Isabella I of Castile, completes the Reconquista, the campaign to recapture Spain from the Moors.","more":""},
  {"id":"65","year":"1455-1485","time":"A.D.","image":"","events":"The Wars of the Roses occur in England, a series of civil wars between the houses of York and Lancaster for control of the English throne.","more":""},
  {"id":"66","year":"1453","time":"A.D.","image":"","events":"The Byzantine Empire falls to the Ottoman Empire as Constantinople (present-day Istanbul) is captured by Mehmed the Conqueror, marking the end of the Byzantine Empire.","more":""},
  {"id":"67","year":"1431","time":"A.D.","image":"/images/joan.jpg","events":"Joan of Arc, the French military leader and martyr, is burned at the stake for heresy.","more":""},
  {"id":"68","year":"1415","time":"A.D.","image":"","events":"The Battle of Agincourt takes place during the Hundred Years' War, resulting in a major English victory against the French.","more":""},
  {"id":"69","year":"1401","time":"A.D.","image":"","events":"The Yongle Emperor of China commissions the construction of the Forbidden City in Beijing.","more":""},
  {"id":"70","year":"1396","time":"A.D.","image":"","events":"The Battle of Nicopolis takes place between the Crusader army and the Ottoman Empire, resulting in a decisive Ottoman victory.","more":""},
  {"id":"71","year":"1392","time":"A.D.","image":"","events":"The Joseon Dynasty is established in Korea, following the overthrow of the Goryeo Dynasty.","more":""},
  {"id":"72","year":"1386","time":"A.D.","image":"","events":"The Union of Krewo is signed, uniting the Kingdom of Poland and the Grand Duchy of Lithuania under a personal union.","more":""},
  {"id":"73","year":"1381","time":"A.D.","image":"","events":"The Peasants' Revolt takes place in England, as a response to social and economic unrest, led by Wat Tyler and other rebel leaders.","more":""},
  {"id":"74","year":"1378","time":"A.D.","image":"","events":"The Western Schism, a split within the Catholic Church, leads to multiple claimants to the papacy and a period of ecclesiastical turmoil.","more":""},
  {"id":"75","year":"1368","time":"A.D.","image":"","events":"The Ming Dynasty is established in China, following the overthrow of the Mongol-led Yuan Dynasty.","more":""},
  {"id":"76","year":"1347","time":"A.D.","image":"/images/plague.jpg","events":"The Black Death outbreaks, a devastating pandemic caused by the bubonic plague, spreads across Europe, resulting in the deaths of millions of people.","more":""},
  {"id":"77","year":"1337","time":"A.D.","image":"/images/100war.jpg","events":"The Hundred Years' War begins between England and France, with intermittent conflicts and periods of peace throughout the duration.","more":""},
  {"id":"78","year":"1324","time":"A.D.","image":"","events":"Mansa Musa, the ruler of the Mali Empire, makes his famous pilgrimage to Mecca, showcasing the wealth of his empire and spreading awareness of West African civilization.","more":""},
  {"id":"79","year":"1307","time":"A.D.","image":"","events":"King Philip IV of France orders the arrest and suppression of the Knights Templar.","more":""},
  {"id":"80","year":"1302","time":"A.D.","image":"","events":"The Battle of Courtrai takes place during the Franco-Flemish War, resulting in a victory for the Flemish militia against the French knights.","more":""},
  {"id":"81","year":"1299","time":"A.D.","image":"","events":"Osman I founds the Ottoman Empire in Anatolia, marking the beginning of a powerful Islamic state.","more":""},
  {"id":"82","year":"1291","time":"A.D.","image":"","events":"The Crusader states in the Holy Land, including the last remaining stronghold of Acre, fall to Muslim forces, effectively ending the Crusades.","more":""},
  {"id":"83","year":"1274","time":"A.D.","image":"","events":"The Mongol invasions of Japan, known as the Kamikaze (divine wind), are thwarted by typhoons.","more":""},
  {"id":"84","year":"1271","time":"A.D.","image":"","events":"Marco Polo, the Italian explorer, travels to China and serves in the court of Kublai Khan.","more":""},
  {"id":"85","year":"1260","time":"A.D.","image":"","events":"The Battle of Ain Jalut takes place in present-day Israel, where the Mongols are defeated by the Mamluks, halting their westward expansion.","more":""},
  {"id":"86","year":"1258","time":"A.D.","image":"","events":"The Mongols capture and sack Baghdad, effectively ending the Abbasid Caliphate.","more":""},
  {"id":"87","year":"1248","time":"A.D.","image":"","events":"The Seventh Crusade is led by Louis IX of France, who is captured during the campaign.","more":""},
  {"id":"88","year":"1240","time":"A.D.","image":"","events":"The Mongols, led by Batu Khan, invade and conquer Russia, establishing the Golden Horde.","more":""},
  {"id":"89","year":"1230","time":"A.D.","image":"","events":"The Inquisition is established by Pope Gregory IX to combat heresy within the Catholic Church.","more":""},
  {"id":"90","year":"1228","time":"A.D.","image":"","events":"The Sixth Crusade takes place, led by Holy Roman Emperor Frederick II, resulting in a peaceful transfer of control of Jerusalem to Christian forces.","more":""},
  {"id":"91","year":"1227","time":"A.D.","image":"/images/ghengis.jpg","events":"Genghis Khan, the founder and leader of the Mongol Empire, dies.","more":""},
  {"id":"92","year":"1219","time":"A.D.","image":"","events":"The Fifth Crusade begins, focusing on the reconquest of Jerusalem but ultimately failing to achieve its objective.","more":""},
  {"id":"93","year":"1215","time":"A.D.","image":"","events":"King John of England signs the Magna Carta, limiting the power of the monarchy and establishing the principle of the rule of law.","more":""},
  {"id":"94","year":"1209","time":"A.D.","image":"","events":"Genghis Khan and his descendants launched progressive invasions of China, subjugating the Western Xia.","more":""},
  {"id":"95","year":"1204","time":"A.D.","image":"","events":"The Fourth Crusade, originally intended to recapture Jerusalem, results in the sack of Constantinople by the Crusader forces.","more":""},
  {"id":"96","year":"1199","time":"A.D.","image":"","events":"Richard I (Richard the Lionheart) dies, and his brother John becomes the King of England.","more":""},
  {"id":"97","year":"1187","time":"A.D.","image":"","events":"Saladin, the Muslim military leader, captures Jerusalem from the Crusaders, sparking the Third Crusade.","more":""},
  {"id":"98","year":"1170","time":"A.D.","image":"","events":"Thomas Becket, the Archbishop of Canterbury, is murdered in Canterbury Cathedral by followers of King Henry II.","more":""},
  {"id":"99","year":"1154","time":"A.D.","image":"","events":"Henry II becomes the King of England, marking the beginning of the Plantagenet dynasty.","more":""},
  {"id":"100","year":"1147","time":"A.D.","image":"","events":"The Second Crusade begins, led by European monarchs and aimed at recapturing the city of Edessa from Muslim forces.","more":""},
  {"id":"101","year":"1139","time":"A.D.","image":"","events":"The Second Lateran Council is held in Rome, where the Catholic Church issues decrees against simony and defines laws on clerical celibacy.","more":""},
  {"id":"102","year":"1122","time":"A.D.","image":"","events":"The Concordat of Worms is signed, resolving the Investiture Controversy between the Papacy and the Holy Roman Empire.","more":""},
  {"id":"103","year":"1100","time":"A.D.","image":"","events":"Henry I becomes the King of England after the death of his brother William II.","more":""},
  {"id":"104","year":"1096","time":"A.D.","image":"","events":"The First Crusade begins, resulting in the capture of Jerusalem by Christian forces and the establishment of Crusader states in the Levant.","more":""},
  {"id":"105","year":"1095","time":"A.D.","image":"","events":"Pope Urban II calls for the First Crusade at the Council of Clermont, leading to a series of military campaigns by Western European Christians to reclaim the Holy Land.","more":""},
  {"id":"106","year":"1071","time":"A.D.","image":"","events":"The Battle of Manzikert occurs, where the Seljuk Turks defeat the Byzantine Empire, leading to the loss of Anatolia.","more":""},
  {"id":"107","year":"1066","time":"A.D.","image":"","events":"1. The Battle of Hastings takes place in England, where William the Conqueror of Normandy defeats King Harold II, leading to Norman conquest of England.\n\n2. The Bayeux Tapestry is created, depicting the events leading up to the Norman Conquest.","more":""},
  {"id":"108","year":"1054","time":"A.D.","image":"","events":"The Great Schism occurs, leading to the permanent split between the Eastern Orthodox Church and the Roman Catholic Church.","more":""},
  {"id":"109","year":"1014","time":"A.D.","image":"","events":"The Battle of Clontarf takes place in Ireland, resulting in a victory for Brian Boru and the defeat of Viking forces.","more":""},
  {"id":"110","year":"1000","time":"A.D.","image":"/images/leif.jpg","events":"1. The Hungarian king, Stephen I, is crowned as the first Christian king of Hungary.\n\n2. Leif Erikson, a Norse explorer, reaches North America, possibly becoming the first European to do so. He establishes a settlement in Vinland (possibly modern-day Newfoundland, Canada).","more":""},
  {"id":"111","year":"987","time":"A.D.","image":"","events":"Hugh Capet is crowned as the King of France, establishing the Capetian Dynasty and the beginning of modern France.","more":""},
  {"id":"112","year":"911","time":"A.D.","image":"","events":"The Carolingian Empire officially ends with the death of Louis the Child, and the feudal system gains prominence in Europe.","more":""},
  {"id":"113","year":"879","time":"A.D.","image":"","events":"Prince Oleg establishes the Kievan Rus' state in Eastern Europe, with Novgorod as its capital.","more":""},
  {"id":"114","year":"843","time":"A.D.","image":"","events":"The Treaty of Verdun is signed, dividing the Carolingian Empire into three parts, marking the beginning of the Carolingian fragmentation.","more":""},
  {"id":"115","year":"800","time":"A.D.","image":"","events":"Charlemagne is crowned as the Holy Roman Emperor by Pope Leo III, marking the revival of the Western Roman Empire.","more":""},
  {"id":"116","year":"732","time":"A.D.","image":"","events":"The Battle of Tours takes place in France, where Charles Martel defeats the Muslim forces, halting the Muslim advance into Europe.","more":""},
  {"id":"117","year":"711","time":"A.D.","image":"","events":"Muslim forces under Tariq ibn Ziyad invade and conquer most of the Iberian Peninsula.","more":""},
  {"id":"118","year":"632","time":"A.D.","image":"","events":"Muhammad dies, and the Rashidun Caliphate is established, leading to the expansion of Islam.","more":""},
  {"id":"119","year":"622","time":"A.D.","image":"","events":"The Islamic prophet Muhammad and his followers migrate from Mecca to Medina, marking the beginning of the Islamic calendar.","more":""},
  {"id":"120","year":"589","time":"A.D.","image":"","events":"The Sui Dynasty is established in China, reuniting the country after centuries of division.","more":""},
  {"id":"121","year":"527","time":"A.D.","image":"","events":"Byzantine Emperor Justinian I comes to power, initiating a period of significant legal, cultural, and architectural reforms.","more":""},
  {"id":"122","year":"500","time":"A.D.","image":"","events":"The Gupta Empire in India begins to decline.","more":""},
  {"id":"123","year":"476","time":"A.D.","image":"","events":"The Western Roman Empire falls, marking the end of ancient Rome and the beginning of the Middle Ages.","more":""},
  {"id":"124","year":"337","time":"A.D.","image":"","events":"Emperor Constantine the Great dies, and the Roman Empire is divided among his sons, leading to the decline of the unified empire.","more":""},
  {"id":"125","year":"325","time":"A.D.","image":"","events":"The First Council of Nicaea takes place, establishing the Nicene Creed and defining orthodox Christian doctrine.","more":""},
  {"id":"126","year":"313","time":"A.D.","image":"","events":"Emperor Constantine the Great issues the Edict of Milan, granting religious toleration to Christianity in the Roman Empire.","more":""},
  {"id":"127","year":"312","time":"A.D.","image":"","events":"Roman Emperor Constantine I has a vision of the Chi-Rho symbol and subsequently converts to Christianity.","more":""},
  {"id":"128","year":"305","time":"A.D.","image":"","events":"Diocletian abdicates as Roman emperor, leading to the Tetrarchy system of governance.","more":""},
  {"id":"129","year":"300","time":"A.D.","image":"","events":"The Gupta Empire begins to rise in northern India under Emperor Chandragupta I.","more":""},
  {"id":"130","year":"284","time":"A.D.","image":"","events":"Diocletian becomes the Roman emperor, initiating a series of reforms to stabilize the empire.","more":""},
  {"id":"131","year":"251","time":"A.D.","image":"","events":"The Palmyrene Empire, under Queen Zenobia, briefly breaks away from Roman rule in the eastern part of the empire.","more":""},
  {"id":"132","year":"250","time":"A.D.","image":"","events":"The Decian persecution of Christians begins in the Roman Empire.","more":""},
  {"id":"133","year":"235","time":"A.D.","image":"","events":"The Severan Dynasty in the Roman Empire ends, leading to a period of political instability known as the Crisis of the Third Century.","more":""},
  {"id":"134","year":"226","time":"A.D.","image":"","events":"Cao Pi establishes the Wei Dynasty, marking the beginning of the Three Kingdoms period in China.","more":""},
  {"id":"135","year":"220","time":"A.D.","image":"","events":"The Eastern Han Dynasty in China collapses, marking the end of the Han Dynasty period.","more":""},
  {"id":"136","year":"212","time":"A.D.","image":"","events":"Emperor Caracalla grants Roman citizenship to all free inhabitants of the empire through the Constitutio Antoniniana.","more":""},
  {"id":"137","year":"184","time":"A.D.","image":"","events":"The Yellow Turban Rebellion breaks out in China, leading to widespread unrest and instability during the late Eastern Han Dynasty.","more":""},
  {"id":"138","year":"180","time":"A.D.","image":"","events":"Marcus Aurelius dies, and his son Commodus succeeds him as the Roman emperor.","more":""},
  {"id":"139","year":"166","time":"A.D.","image":"","events":"The Roman Empire faces conflicts with Germanic tribes in the Marcomannic Wars.","more":""},
  {"id":"140","year":"161","time":"A.D.","image":"","events":"Emperor Antoninus Pius dies, and Marcus Aurelius becomes the Roman emperor.","more":""},
  {"id":"141","year":"122","time":"A.D.","image":"","events":"The Bar Kokhba revolt occurs in Judea against Roman rule.","more":""},
  {"id":"142","year":"117","time":"A.D.","image":"","events":"Emperor Trajan dies, and Hadrian becomes the new Roman emperor.","more":""},
  {"id":"143","year":"112","time":"A.D.","image":"","events":"Construction of the Hadrian's Wall begins in Britain under Emperor Hadrian.","more":""},
  {"id":"144","year":"105","time":"A.D.","image":"","events":"The Dacian Wars begin as Emperor Trajan launches military campaigns against the Dacians in modern-day Romania.","more":""},
  {"id":"145","year":"100","time":"A.D.","image":"","events":"1. The Han Dynasty continues to rule in China under Emperor He.\n\n2. The Roman Empire reaches its greatest territorial extent under Emperor Trajan.","more":""},
  {"id":"146","year":"98","time":"A.D.","image":"","events":"Emperor Nerva dies, and Trajan becomes the Roman emperor.","more":""},
  {"id":"147","year":"96","time":"A.D.","image":"","events":"Emperor Domitian is assassinated, and Nerva becomes the Roman emperor, beginning the period known as the Nerva-Antonine dynasty.","more":""},
  {"id":"148","year":"80","time":"A.D.","image":"","events":"Emperor Vespasian dies, and his son Titus becomes the new Roman emperor.","more":""},
  {"id":"149","year":"79","time":"A.D.","image":"","events":"The eruption of Mount Vesuvius leads to the destruction of Pompeii and Herculaneum.","more":""},
  {"id":"150","year":"66","time":"A.D.","image":"","events":"The First Jewish-Roman War begins, resulting in the destruction of the Second Temple in Jerusalem.","more":""},
  {"id":"151","year":"64","time":"A.D.","image":"","events":"The Great Fire of Rome occurs, leading to accusations against Christians and the persecution of them by Emperor Nero.","more":""},
  {"id":"152","year":"49","time":"A.D.","image":"","events":"The Apostle Paul undertakes his missionary journeys, spreading Christianity throughout the eastern Mediterranean.","more":""},
  {"id":"153","year":"43","time":"A.D.","image":"","events":"The Roman conquest of Britain begins under Emperor Claudius.","more":""},
  {"id":"154","year":"37","time":"A.D.","image":"","events":"Tiberius dies, and Caligula becomes the third Roman emperor.","more":""},
  {"id":"155","year":"30","time":"A.D.","image":"","events":"According to Christian tradition, Jesus is crucified and resurrected.","more":""},
  {"id":"157","year":"14","time":"A.D.","image":"","events":"Augustus, the first Roman emperor, dies, and Tiberius succeeds him.","more":""},
  {"id":"158","year":"8","time":"A.D.","image":"","events":"Roman Empire general Tiberius defeats Dalmatians on the river Bathinus.","more":""},
  {"id":"158","year":"7","time":"A.D.","image":"","events":"Publius Quinctilius Varus is appointed governor of Germania, charged with organizing Germania between the Rhine and Elbe rivers.","more":""},
  {"id":"158","year":"6","time":"A.D.","image":"Herod Archelaus, ethnarch of Samaria, Judea, and Idumea, is deposed and banished to Vienne in Gaul.","events":"","more":""},
  {"id":"158","year":"4","time":"A.D.","image":"","events":"Namhae Chachaung succeeds Bak Hyeokgeose as king of the Korean kingdom of Silla.","more":""},
  {"id":"158","year":"2","time":"A.D.","image":"","events":"After Lucius Caesar's death, Augustus allowed his stepson Tiberius to return to Rome as a private citizen after six years of retirement on Rhodes.","more":""},
  {"id":"159","year":"1","time":"A.D.","image":"/images/1.jpg","events":"The year traditionally believed to be the birth of Jesus Christ.","more":""},
  {"id":"160","year":"27","time":"B.C.","image":"","events":"The Roman Senate grants Octavian (Augustus) the title of Augustus, marking the beginning of the Roman Empire.","more":""},
  {"id":"161","year":"44","time":"B.C.","image":"","events":"Julius Caesar is assassinated, leading to the rise of Augustus Caesar and the Roman Empire.","more":""},
  {"id":"162","year":"51","time":"B.C.","image":"/images/cleopatra.jpg","events":"Cleopatra becomes Pharaoh of Egypt, ruling jointly with her father, Ptolemy XII Auletes. After her father's death, she ruled alongside her younger brother, Ptolemy XIII, and later her other brother, Ptolemy XIV, and finally with her son, Ptolemy XV, until her death in 30 BC.","more":"Cleo!"},
  {"id":"163","year":"146","time":"B.C.","image":"","events":"The Roman Republic destroys Carthage, ending the Third Punic War.","more":""},
  {"id":"164","year":"221","time":"B.C.","image":"","events":"Qin Shi Huang becomes the first emperor of unified China, marking the start of the Qin Dynasty.","more":""},
  {"id":"165","year":"323","time":"B.C.","image":"","events":"Alexander the Great dies, and his empire is divided among his generals, leading to the Hellenistic period.","more":""},
  {"id":"166","year":"336","time":"B.C.","image":"","events":"Alexander the Great becomes the ruler of Macedon.","more":""},
  {"id":"167","year":"490","time":"B.C.","image":"/images/490bc.jpg","events":"The Battle of Marathon takes place, where the Athenians defeat the Persian invasion.","more":""},
  {"id":"168","year":"509","time":"B.C.","image":"","events":"The Roman Republic is established after the overthrow of the Roman monarchy.","more":""},
  {"id":"169","year":"546","time":"B.C.","image":"","events":"Cyrus the Great establishes the Persian Empire after overthrowing the Median Empire.","more":""},
  {"id":"170","year":"586","time":"B.C.","image":"","events":"The Babylonians, led by Nebuchadnezzar II, conquer Jerusalem and exile the Israelites.","more":""},
  {"id":"171","year":"753","time":"B.C.","image":"","events":"According to Roman mythology, Romulus founds the city of Rome, marking the beginning of the Roman Empire.","more":""},
  {"id":"172","year":"1200","time":"B.C.","image":"","events":"The collapse of the Bronze Age civilizations, including the Hittites, Mycenaeans, and the fall of Troy.","more":""},
  {"id":"173","year":"1792","time":"B.C.","image":"","events":"Hammurabi becomes the ruler of Babylon and later establishes the Code of Hammurabi, one of the earliest known legal codes.","more":""},
  {"id":"174","year":"2500","time":"B.C.","image":"","events":"The Great Pyramid of Giza is built in Egypt.","more":"yes"},
  {"id":"175","year":"3100","time":"B.C.","image":"","events":"The first Egyptian dynasty is established by Narmer (Menes), uniting Upper and Lower Egypt.","more":"yea"},
  {"id":"176","year":"4000","time":"B.C.","image":"","events":"The Sumerian civilization emerges in Mesopotamia (modern-day Iraq).","more":"yes"},
  {"id":"177","year":"5000","time":"B.C.","image":"","events":"During the Neolithic period, a time characterized by the development of agriculture, animal domestication, and settled communities. While specific events from that time are not documented, archaeological evidence suggests significant advancements in human civilization, such as the transition from hunter-gatherer societies to agricultural societies in various parts of the world. This period marked the beginnings of human civilization as we know it today.","more":"yes"},
  {"id":"178","year":"10,000","time":"B.C.","image":"/images/10000bc.jpg","events":"Humanity was still in the prehistoric era, known as the Stone Age.","more":"yes"},
  ];


let searchInput = document.getElementById("search");
let Form = document.getElementById("form");

let moreText;
let moreBtn;

let container = document.getElementById("timelinemain");

boolForwards();


function boolForwards() {
  
  events.forEach((Events) => {

    let Year = document.createElement("h3");
    let Event = document.createElement("p");
    let eventDiv = document.createElement("div");
    let Image = document.createElement("img");
    moreBtn = document.createElement("button");
    moreText = document.createElement("p");

    eventDiv.className = "eventdiv";
    Event.className = "eventtext";
    Year.className = "yeartext";
    Image.className = "image";
    moreBtn.className = "readmore";
    moreText.className = "minimized";

    Year.textContent = "Year: " + Events.year + " " + Events.time;
    Event.textContent = "" + Events.events;
    Image.setAttribute("src", Events.image);
    moreBtn.innerHTML = "Read More";
    moreBtn.setAttribute("onclick", "readMore()");
    moreText.textContent = "" + Events.more;
    moreBtn.setAttribute("id", "moreBtn" + Events.id);
  
  
    if(Events.events != "") {
    container.appendChild(eventDiv);
    //container.appendChild(Vert);
      eventDiv.appendChild(Year);
      eventDiv.appendChild(Event);
      eventDiv.appendChild(moreText);
     // eventDiv.appendChild(testMore);
      if(Events.more != "") {
     // eventDiv.appendChild(moreBtn);
      }
      eventDiv.appendChild(Image);
    }

});
}

function boolBackwards() {
  
  events.reverse();
  events.forEach((Events) => {

    let Year = document.createElement("h3");
    let Event = document.createElement("p");
    let eventDiv = document.createElement("div");
    let Image = document.createElement("img");
    moreBtn = document.createElement("button");
    moreText = document.createElement("p");

    

    eventDiv.className = "eventdiv";
    Event.className = "eventtext";
    Year.className = "yeartext";
    Image.className = "image";
    moreBtn.className = "readmore";
    moreText.className = "minimized";

    Year.textContent = "Year: " + Events.year + " " + Events.time;
    Event.innerHTML = "" + Events.events;
    Image.setAttribute("src", Events.image);
    moreBtn.innerHTML = "Read More";
    moreBtn.setAttribute("onclick", "readMore()");
    moreText.textContent = "" + Events.more;
    moreBtn.setAttribute("id", "moreBtn" + Events.id);
  
  
    if(Events.events != "") {
    container.appendChild(eventDiv);
    //container.appendChild(Vert);
      eventDiv.appendChild(Year);
      eventDiv.appendChild(Event);
      eventDiv.appendChild(moreText);
     // eventDiv.appendChild(testMore);
      if(Events.more != "") {
     // eventDiv.appendChild(moreBtn);
      }
      eventDiv.appendChild(Image);
    }

});
}

//events.forEach((Events) => {

 //   let Year = document.createElement("h3");
//    let Event = document.createElement("p");
//    let eventDiv = document.createElement("div");
 //   let Image = document.createElement("img");
 //   moreBtn = document.createElement("button");
 //   moreText = document.createElement("p");
//
 //   eventDiv.className = "eventdiv";
  //  Event.className = "eventtext";
  //  Year.className = "yeartext";
 //   Image.className = "image";
//    moreBtn.className = "readmore";
//    moreText.className = "minimized";
//
 //   Year.textContent = "Year: " + Events.year + " " + Events.time;
//    Event.textContent = "" + Events.events;
 //   Image.setAttribute("src", Events.image);    moreBtn.innerHTML = "Read More";
//    moreBtn.setAttribute("onclick", "readMore()");
//    moreText.textContent = "" + Events.more;
//    moreBtn.setAttribute("id", "moreBtn" + Events.id);
//  
 // 
//    if(Events.events != "") {
//    container.appendChild(eventDiv);
    //container.appendChild(Vert);
  //    eventDiv.appendChild(Year);
//      eventDiv.appendChild(Event);
//      eventDiv.appendChild(moreText);
     // eventDiv.appendChild(testMore);
   //   if(Events.more != "") {
     // eventDiv.appendChild(moreBtn);
//}
  //    eventDiv.appendChild(Image);
 //   }

//});


function readMore() {
  moreText.className = "maximized";
  moreBtn.innerHTML = "Read Less";
  moreBtn.setAttribute("onclick", "readLess()");
  alert("does this work?");
}

function readLess() {
  moreText.className = "minimized";
  moreBtn.innerHTML = "Read More";
  moreBtn.setAttribute("onclick", "readMore()");
}

//events.reversed();





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
