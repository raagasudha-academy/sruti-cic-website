import JoinSection from "../components/JoinSection";
import PageIntro from "../components/PageIntro";
import { teachers, type Teacher } from "../data/teachers";

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="teacher-card">
      <div className="teacher-photo">
        <img src={teacher.photo} alt={teacher.name} />
      </div>

      <div className="teacher-card-copy">
        <p className="teacher-role">{teacher.role}</p>
        <h3>{teacher.name}</h3>

        <div className="teacher-detail">
          <span>Teaches</span>
          <p>{teacher.teaches}</p>
        </div>

        <div className="teacher-detail">
          <span>About</span>
          <p>{teacher.about}</p>
        </div>

      </div>
    </article>
  );
}

export default function Teachers() {
  const vedamTeachers = teachers.filter((teacher) => teacher.role === "Vedam Teacher");
  const vedantaTeachers = teachers.filter((teacher) => teacher.role === "Vedanta Teacher");

  return (
    <>
      <PageIntro
        eyebrow="Our Teachers"
        title="Meet the people who guide our learning."
        copy="Vedam and Vedanta learning at Śruti is guided by teachers across our face-to-face and online sessions."
      />

      <section className="section teachers-section">
        <div className="teachers-heading">
          <p className="eyebrow">Vedam</p>
          <h2>Vedam Teachers</h2>
        </div>

        <div className="teacher-grid">
          {vedamTeachers.map((teacher) => <TeacherCard key={teacher.name} teacher={teacher} />)}
        </div>
      </section>

      <section className="section vedanta-teachers-section">
        <div className="teachers-heading">
          <p className="eyebrow">Vedanta</p>
          <h2>Vedanta Teacher</h2>
        </div>

        <div className="teacher-grid teacher-grid-featured">
          {vedantaTeachers.map((teacher) => <TeacherCard key={teacher.name} teacher={teacher} />)}
        </div>
      </section>

      <JoinSection />
    </>
  );
}
