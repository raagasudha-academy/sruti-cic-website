export type ReadingBlock = {
  lines: string[];
  meaning: string;
};

export type ChalisaVerse = ReadingBlock & {
  number: number;
};

export const readingNotes = [
  "The bold lines are the Hanuman Chalisa written in simple English letters (Roman transliteration).",
  "The smaller sentence underneath gives a simple meaning for children. It is not a word-for-word scholarly translation.",
  "Spellings can vary between families and traditions. Read in the pronunciation you have learned at home or temple.",
  "Try reading one verse at a time. You can repeat each line slowly before moving to the next.",
] as const;

export const pronunciationGuide = [
  { sound: "aa / a", guide: "as in “father” (a longer a sound)" },
  { sound: "ee / i", guide: "as in “see”" },
  { sound: "oo / u", guide: "as in “food”" },
  { sound: "sh", guide: "as in “ship”" },
] as const;

export const readingTip = "The most important thing is to read with attention and devotion - perfect pronunciation can come with practice.";

export const openingDoha: ReadingBlock[] = [
  {
    lines: ["Shri Guru Charan Saroj Raj,", "Nij manu mukuru sudhari.", "Varanau Raghuvar Vimal Jasu,", "Jo dayaku phal chari."],
    meaning: "With the blessings of my Guru, I clean the mirror of my mind and remember the pure glory of Lord Rama, which gives the four great blessings of life.",
  },
  {
    lines: ["Buddhiheen Tanu Janike,", "Sumirau Pavan Kumar.", "Bal buddhi vidya dehu mohi,", "Harahu kalesh Vikar."],
    meaning: "Knowing that I need wisdom, I remember Hanuman, the Son of the Wind. Please give me strength, good understanding and knowledge, and remove my troubles and faults.",
  },
];

export const chalisaVerses: ChalisaVerse[] = [
  {
    number: 1,
    lines: ["Jai Hanuman gyan gun sagar,", "Jai Kapis tihun lok ujagar."],
    meaning: "Victory to Hanuman, the ocean of wisdom and goodness. Your glory shines through all the worlds.",
  },
  {
    number: 2,
    lines: ["Ram doot atulit bal dhama,", "Anjani putra Pavan sut nama."],
    meaning: "You are Lord Rama's messenger and the home of unmatched strength. You are Anjani's son and are also called the Son of the Wind.",
  },
  {
    number: 3,
    lines: ["Mahavir Vikram Bajrangi,", "Kumati nivar sumati ke sangi."],
    meaning: "You are a great and mighty hero. You remove wrong thoughts and help us grow in good wisdom.",
  },
  {
    number: 4,
    lines: ["Kanchan varan viraj subesa,", "Kanan kundal kunchit kesa."],
    meaning: "Your golden form shines beautifully. You wear earrings and have lovely curling hair.",
  },
  {
    number: 5,
    lines: ["Hath vajra aur dhvaja viraje,", "Kandhe moonj janeu saje."],
    meaning: "You carry a mighty weapon and a flag, and the sacred thread rests across your shoulder.",
  },
  {
    number: 6,
    lines: ["Sankar suvan Kesari nandan,", "Tej pratap maha jag vandan."],
    meaning: "You are linked with Lord Shiva and are the beloved son of Kesari. The whole world honours your courage and radiance.",
  },
  {
    number: 7,
    lines: ["Vidyavan guni ati chatur,", "Ram kaj karibe ko aatur."],
    meaning: "You are learned, virtuous and very wise, and you are always eager to serve Lord Rama.",
  },
  {
    number: 8,
    lines: ["Prabhu charitra sunibe ko rasiya,", "Ram Lakhan Sita man basiya."],
    meaning: "You love to hear the stories of Lord Rama. Rama, Lakshmana and Sita always live in your heart.",
  },
  {
    number: 9,
    lines: ["Sukshma roop dhari Siyahi dikhava,", "Vikat roop dhari Lank jarava."],
    meaning: "You took a tiny form to appear before Sita, and later a powerful form when Lanka was set ablaze.",
  },
  {
    number: 10,
    lines: ["Bhim roop dhari asur sanhare,", "Ramachandra ke kaj sanvare."],
    meaning: "You took a mighty form to defeat evil forces and successfully completed Lord Rama's work.",
  },
  {
    number: 11,
    lines: ["Laye Sanjivan Lakhan jiyaye,", "Shri Raghuvir harashi ur laye."],
    meaning: "You brought the Sanjivani herb and saved Lakshmana. Lord Rama was overjoyed and embraced you.",
  },
  {
    number: 12,
    lines: ["Raghupati kinhi bahut badai,", "Tum mama priya Bharat-hi-sam bhai."],
    meaning: "Lord Rama praised you greatly and said, 'You are as dear to me as my brother Bharata.'",
  },
  {
    number: 13,
    lines: ["Sahas badan tumharo yash gaave,", "As kahi Shripati kanth lagaave."],
    meaning: "Even a thousand voices could keep singing your glory. Saying this, Lord Rama lovingly embraced you.",
  },
  {
    number: 14,
    lines: ["Sanakadik Brahmadi Munisa,", "Narad Sarad sahit Ahisa."],
    meaning: "Great sages and divine beings - including Brahma, Narada, Saraswati and Shesha - praise you.",
  },
  {
    number: 15,
    lines: ["Yam Kuber Digpal jahan te,", "Kavi kovid kahi sake kahan te."],
    meaning: "Even Yama, Kubera, the guardians of the directions, poets and scholars cannot fully describe your greatness.",
  },
  {
    number: 16,
    lines: ["Tum upkar Sugrivahin keenha,", "Ram milaye rajpad deenha."],
    meaning: "You helped Sugriva by bringing him to Lord Rama, and he regained his kingdom.",
  },
  {
    number: 17,
    lines: ["Tumharo mantra Vibhishan maana,", "Lankeshwar bhaye sab jag jana."],
    meaning: "Vibhishana followed your wise advice and became the king of Lanka, as the whole world knows.",
  },
  {
    number: 18,
    lines: ["Yug sahastra yojan par Bhanu,", "Leelyo tahi madhur phal janu."],
    meaning: "As a child, you saw the faraway Sun and reached for it, thinking it was a sweet fruit.",
  },
  {
    number: 19,
    lines: ["Prabhu mudrika meli mukh mahee,", "Jaladhi langhi gaye acharaj nahee."],
    meaning: "Carrying Lord Rama's ring, you crossed the great ocean. With your strength and devotion, this was no surprise.",
  },
  {
    number: 20,
    lines: ["Durgam kaj jagat ke jete,", "Sugam anugrah tumhare tete."],
    meaning: "With your grace, even very difficult tasks can become easier.",
  },
  {
    number: 21,
    lines: ["Ram duare tum rakhvare,", "Hot na agya binu paisare."],
    meaning: "You guard the doorway of Lord Rama. No one enters without permission.",
  },
  {
    number: 22,
    lines: ["Sab sukh lahai tumhari sarna,", "Tum rakshak kahu ko darna."],
    meaning: "Those who take shelter in you find comfort and courage. With you as protector, there is no need to fear.",
  },
  {
    number: 23,
    lines: ["Aapan tej samharo aapai,", "Teenon lok hank te kanpai."],
    meaning: "Your power is so great that only you can fully control it; your mighty call can make the three worlds tremble.",
  },
  {
    number: 24,
    lines: ["Bhoot pisach nikat nahin aavai,", "Mahavir jab naam sunavai."],
    meaning: "The verse teaches that fear and harmful forces stay away when the name of brave Hanuman is remembered.",
  },
  {
    number: 25,
    lines: ["Nasai rog harai sab peera,", "Japat nirantar Hanumat beera."],
    meaning: "The verse says that remembering brave Hanuman brings strength and comfort in times of illness and pain.",
  },
  {
    number: 26,
    lines: ["Sankat se Hanuman chhudavai,", "Man Kram Vachan dhyan jo lavai."],
    meaning: "Hanuman helps those who remember him sincerely in their thoughts, actions and words during times of trouble.",
  },
  {
    number: 27,
    lines: ["Sab par Ram tapasvi raja,", "Tin ke kaj sakal tum saja."],
    meaning: "Lord Rama is the noble king devoted to truth, and you faithfully carry out his work.",
  },
  {
    number: 28,
    lines: ["Aur manorath jo koi lavai,", "Soi amit jeevan phal pavai."],
    meaning: "Those who come with sincere hopes and devotion receive abundant blessings in life.",
  },
  {
    number: 29,
    lines: ["Charon yug partap tumhara,", "Hai prasiddh jagat ujiyara."],
    meaning: "Your glory is remembered through all four ages, and your name brings light to the world.",
  },
  {
    number: 30,
    lines: ["Sadhu sant ke tum rakhvare,", "Asur nikandan Ram dulare."],
    meaning: "You protect saints and good people, defeat evil, and are dearly loved by Lord Rama.",
  },
  {
    number: 31,
    lines: ["Asht siddhi nav nidhi ke data,", "As var deen Janki mata."],
    meaning: "Mother Sita blessed you with the power to grant the eight spiritual abilities and the nine kinds of treasure.",
  },
  {
    number: 32,
    lines: ["Ram rasayan tumhare pasa,", "Sada raho Raghupati ke dasa."],
    meaning: "You are filled with the sweet devotion of Lord Rama and always remain his faithful servant.",
  },
  {
    number: 33,
    lines: ["Tumhare bhajan Ram ko pavai,", "Janam janam ke dukh bisravai."],
    meaning: "Through loving devotion to Hanuman, a devotee grows closer to Lord Rama and finds freedom from deep sorrow.",
  },
  {
    number: 34,
    lines: ["Ant kaal Raghubar pur jai,", "Jahan janma Hari bhakta kahai."],
    meaning: "At life's end, the devoted soul reaches Lord Rama's abode and remains devoted to God.",
  },
  {
    number: 35,
    lines: ["Aur devta chitt na dharai,", "Hanumat sei sarva sukh karai."],
    meaning: "The verse teaches wholehearted devotion to Hanuman, through which the devotee finds spiritual joy.",
  },
  {
    number: 36,
    lines: ["Sankat katai mitai sab peera,", "Jo sumirai Hanumat balbeera."],
    meaning: "Those who remember mighty Hanuman with faith receive courage and relief in times of trouble and pain.",
  },
  {
    number: 37,
    lines: ["Jai Jai Jai Hanuman Gosai,", "Kripa karahu Gurudev ki nai."],
    meaning: "Victory, victory, victory to Lord Hanuman. Please bless us with the kindness and guidance of a true teacher.",
  },
  {
    number: 38,
    lines: ["Jo sat bar path kar koi,", "Chhutahi bandi maha sukh hoi."],
    meaning: "The verse says that devoted and repeated recitation of the Chalisa can free the heart from bondage and bring deep peace.",
  },
  {
    number: 39,
    lines: ["Jo yah padhe Hanuman Chalisa,", "Hoye siddhi saakhi Gaurisa."],
    meaning: "Whoever reads the Hanuman Chalisa with devotion receives spiritual success; Lord Shiva is called as witness.",
  },
  {
    number: 40,
    lines: ["Tulsidas sada Hari chera,", "Keejai Nath hriday mah dera."],
    meaning: "Tulsidas says, 'I am always a servant of God. O Lord Hanuman, please make your home in my heart.'",
  },
];

export const closingDoha: ReadingBlock = {
  lines: ["Pavan Tanay Sankat Haran,", "Mangal Murti Roop.", "Ram Lakhan Sita Sahit,", "Hriday Basahu Sur Bhoop."],
  meaning: "O Son of the Wind, remover of troubles and form of goodness, please live in my heart together with Rama, Lakshmana and Sita.",
};

export const closingSalutation = "Jai Shri Ram  •  Jai Hanuman";
export const closingMessage = "May this reading bring courage, kindness, wisdom and devotion.";
