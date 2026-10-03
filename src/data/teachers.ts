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
    about: "Teacher profile to be added.",
  },
  {
    photo: umaPhoto,
    name: "Dr Uma Geethanath",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "Teacher profile to be added.",
  },
  {
    photo: aishwaryaPhoto,
    name: "Dr Aishwarya Amarnath",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "I’m a mum of two girls, aged 9 and 5, a wife and an ophthalmologist.\n" +
      "I began learning Vedam with Praveena around seven years ago, and my daughters are now learning too.\n" +
      "Vedam chanting supports focus, pronunciation and concentration, while creating a positive atmosphere. I’m always amazed by how quickly children pick up the chants once they become familiar with Sanskrit sounds. It is wonderful to see them begin this journey so young."
  },
  {
    photo: vibhasPhoto,
    name: "Mr Vibhas Chengalavala",
    role: "Vedam Teacher",
    teaches: "Children, Online",
    about: "I was Inspired by the peace and energy that Vedic chanting brought into my own life. Regular recitation gave me a quiet mind, sharper focus, and a sense of mental strength in difficult times. Experience showed me that Vedam is not just an ancient text, but a practical guide for a healthy wellbeing.\n" +
      "I am motivated teach vedam to guide others in precise recitation and pass on this authentic tradition to the future generations.",
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
    teaches: "Vedanta",
    about: "Community have always been a big part of my life, and I’m passionate about bringing people together through shared learning and culture.\n" +
      "At Śruti, I enjoy engaging children and adults with Vedanta through stories, discussions and simple reflections that make its ideas easier to relate to in everyday life.\n" +
      "I especially love seeing how students connect with these stories, ask questions and gradually discover the values and deeper meanings behind them. For me, Vedanta is not just something to learn, but something to understand, reflect on and live by.",
  },
];
