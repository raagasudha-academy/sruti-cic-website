import praveenaPhoto from "../assets/praveena-photo.png";
import kailashPhoto from "../assets/kailash.png";
import aishwaryaPhoto from "../assets/aishwarya-photo.png";
import umaPhoto from "../assets/uma.png";
import swathiPhoto from "../assets/swathi.png";
import vibhasPhoto from "../assets/vibhas.png";
import amrutaPhoto from "../assets/amruta.png";

export type Teacher = {
  photo: string;
  name: string;
  role: "Vedam Teacher" | "Vedanta Teacher";
  teaches: string;
  about: string;
};

export const teachers: Teacher[] = [
  {
    photo: praveenaPhoto,
    name: "Mrs Praveena Srikailash",
    role: "Vedam Teacher",
    teaches: "Adults, Children, In-person, Online",
    about: "Vedam has been an important part of my own journey, and I feel fortunate to be able to share that learning with others.\n" +
      "I teach Vedam both face to face and online, working with children and adults at different stages of their learning. I enjoy helping students become comfortable with the pronunciation, rhythm and discipline of chanting, while also understanding the meaning and tradition behind what they learn.\n" +
      "For me, it is especially rewarding to see students grow in confidence and develop a lasting connection with Vedam over time.",
  },
  {
    photo: swathiPhoto,
    name: "Ms Swathi Komaraolu",
    role: "Vedam Teacher",
    teaches: "Adults, Children, In-person, Online",
    about: "I began learning Vedam during my early school years, a blessing that has continued to enrich my life’s journey. I have been extremely fortunate to learn from wonderful teachers whose immense patience, dedication and meticulous attention to detail have shaped and refined my understanding over the years. Much like a sculptor patiently chiselling a stone into a work of art, their guidance has taught me that learning Vedam is a process of continual refinement. As a teacher, I strive to carry forward that same spirit of patience and dedication, creating a welcoming environment where children and adults can learn at their own pace, grow in confidence, and develop a lasting and meaningful connection with Vedam."
  },
  {
    photo: umaPhoto,
    name: "Dr Uma Geethanath",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "For me, teaching Vedam is about creating a calm, welcoming space where students feel comfortable learning and asking questions. I believe learning grows through patience, consistency and attentive listening, with each student given the space to progress at a pace that feels natural to them.\n" +
      "My focus is on helping students build confidence, strengthen their foundations and develop a genuine connection with what they are learning.",
  },
  {
    photo: aishwaryaPhoto,
    name: "Dr Aishwarya Amarnath",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "I’m a mum of two girls, aged 9 and 5, a wife and an ophthalmologist.\n" +
      "I began learning Vedam with Praveena around seven years ago, and my daughters are now learning too.\n" +
      "Vedam chanting supports pronunciation, focus and concentration, while creating a positive atmosphere. I’m always amazed by how quickly children pick up the chants once they become familiar with Sanskrit sounds. It is wonderful to see them begin this journey so young."
  },
  {
    photo: vibhasPhoto,
    name: "Mr Vibhas Chengalavala",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "I was inspired by the peace and energy that Vedic chanting brought into my own life. Regular recitation gave me a quiet mind, sharper focus, and a sense of mental strength in difficult times. Experience showed me that Vedam is not just an ancient text, but a practical guide for healthy wellbeing.\n" +
      "I am motivated to teach Vedam to guide others in precise recitation and pass on this authentic tradition to future generations.",
  },
  {
    photo: amrutaPhoto,
    name: "Mrs Amruta Hasa",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "My journey with the Vedas began with a simple fascination for their rhythmic chanting. Over time, that initial spark has deepened into a true love for the chants, alongside a growing intrigue for their intricate linguistic patterns and precise intonations.\n" +
      "\n" +
      "I feel deeply blessed to be a Veda practitioner and to be intimately associated with this ancient tradition. Holding a core belief that the Vedas are a direct pathway to the divine, I feel both profoundly grateful and responsible to contribute to the sacred Veda Poshana programme.",
  },
  {
    photo: kailashPhoto,
    name: "Mr Srikailash Venkitadri",
    role: "Vedanta Teacher",
    teaches: "Adults, Children, In-person, Online",
    about: "I have been studying and sharing Vedanta and Sanatana Dharma for many years through study circles, storytelling, talks and performing arts.\n" +
      "At Śruti, I enjoy engaging adults and  children with Vedanta through interesting stories, discussions and reflections that make ancient teachings meaningful in everyday life. I especially enjoy seeing children ask questions and discover the deeper values behind the stories they hear.\n" +
      "I continue my own learning through studies in Nyaya, Purva Mimamsa and Uttara Mimamsa. For me, Vedanta is not only something to learn, but something to reflect upon and live by." },
];
