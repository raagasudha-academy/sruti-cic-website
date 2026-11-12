import {useState, type ChangeEvent, type FormEvent} from "react";
import {Plus, Trash2, ArrowRight, CheckCircle2} from "lucide-react";
import PageIntro from "../components/PageIntro";
import "../styles/registration.css";

type RegistrationType = "self" | "child" | "both";
type Student = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  school: string;
  interests: string;
  experience: string;
  allergies: string;
  medicalNotes: string;
  photo: File | null
};
const blankStudent = (): Student => ({
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  school: "",
  interests: "",
  experience: "",
  allergies: "",
  medicalNotes: "",
  photo: null
});
// Local development stays disconnected from live registrations. The deployed
// stage endpoint is supplied only by the protected Pages workflow setting.
const endpoint = import.meta.env.DEV
  ? ""
  : import.meta.env.VITE_SRUTI_REGISTRATION_API_URL?.trim() || "";

export default function Registration() {
  const [registrationType, setRegistrationType] = useState<RegistrationType>("child");
  const [selfStudent, setSelfStudent] = useState<Student>(blankStudent());
  const [students, setStudents] = useState<Student[]>([blankStudent()]);
  const [guardian, setGuardian] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "Parent",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    emergencyName: "",
    emergencyPhone: "",
    additionalNotes: ""
  });
  const [consent, setConsent] = useState(false);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [registrationReference, setRegistrationReference] = useState("");
  // International E.164 format only: + followed by 8–15 digits in total.
  const phonePattern = "\\+[1-9][0-9]{7,14}";
  const isValidPhone = (value: string) => /^\+[1-9][0-9]{7,14}$/.test(value.trim());
  const includesSelf = registrationType === "self" || registrationType === "both";
  const includesChildren = registrationType === "child" || registrationType === "both";
  const editStudent = (index: number, changes: Partial<Student>) => setStudents(current => current.map((student, i) => i === index ? {...student, ...changes} : student));
  const editGuardian = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setGuardian(current => ({
    ...current,
    [event.target.name]: event.target.value
  }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) {
      setError("Online submissions are not yet enabled. Please return once Śruti registration is connected.");
      setStatus("error");
      return;
    }
    if (!isValidPhone(guardian.phone) || !isValidPhone(guardian.emergencyPhone)) {
      setError("Please enter both phone numbers in international format, e.g. +447700900123 (no spaces or leading 0).");
      setStatus("error");
      return;
    }
    if ((includesSelf && !selfStudent.allergies.trim()) ||
        (includesChildren && students.some(student => !student.allergies.trim()))) {
      setError('Please state any food allergies for every learner, or write "None".');
      setStatus("error");
      return;
    }
    setBusy(true);
    setStatus("idle");
    setError("");
    try {
      if ((includesChildren && students.some(s => s.photo)) || (includesSelf && selfStudent.photo)) throw new Error("Photograph uploads are awaiting secure storage integration. Please remove photographs and try again.");
      const res = await fetch(endpoint, {
        method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          institution: "sruti",
          registrationType,
          guardian: {...guardian, email: guardian.email.trim(), phone: guardian.phone.trim(), emergencyPhone: guardian.emergencyPhone.trim(), relationship: includesChildren ? guardian.relationship : "Self"},
          students: [...(includesSelf ? [{
            ...selfStudent,
            allergies: selfStudent.allergies.trim(),
            photo: null,
            applicantType: "self"
          }] : []), ...(includesChildren ? students.map(student => ({
            ...student,
            allergies: student.allergies.trim(),
            photo: null,
            applicantType: "child"
          })) : [])].map(({photo: _photo, ...data}) => data),
          consents: {registration: consent, photography: photoConsent}
        })
      });
      if (!res.ok) throw new Error("We couldn't submit your registration. Please try again later.");
      const receipt = await res.json();
      if (typeof receipt?.registrationId !== "string" || !receipt.registrationId) {
        throw new Error(
          "Registration received, but the reference could not be confirmed. Please contact Śruti before submitting again."
        );
      }
      setRegistrationReference(receipt.registrationId);
      setStatus("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Registration could not be submitted.");
      setStatus("error");
    } finally {
      setBusy(false);
    }
  }

  if (status === "success") return <section className="section registration-success" role="status"><CheckCircle2
    size={40}/><h1>Registration received</h1><p>Thank you for registering your interest with Śruti. Our team will review
    your details and contact you.</p>
    <div className="registration-reference">
      <p>Your registration reference</p>
      <strong>{registrationReference}</strong>
      <p>Please keep this reference for future enquiries.</p>
    </div>
  </section>;

  return <>
    <PageIntro eyebrow="Join Śruti" title="Student registration"
               copy="Register for yourself, your children, or both. We will review your application before any learner account access is granted."/>
    <section className="section registration-container">
      {!endpoint &&
          <div className="registration-notice" role="status"><strong>Registration setup in progress.</strong> This form
              is a preview while we connect the secure Śruti registration service. Submissions are not yet enabled.
          </div>}
      <form onSubmit={submit} className="registration-form">
        <div className="registration-panel">
          <p className="eyebrow">Getting started</p>
          <h2>Who are you registering?</h2>
          <div className="registration-type-options" role="radiogroup" aria-label="Who are you registering?">
            {([["self", "Myself", "I want to join Śruti"], ["child", "My child or children", "I am registering one or more children"], ["both", "Myself and my children", "We would all like to join"]] as const).map(([value, label, detail]) => (
              <label key={value} className={`registration-type-option${registrationType === value ? " selected" : ""}`}>
                <input type="radio" name="registrationType" value={value} checked={registrationType === value}
                       onChange={() => setRegistrationType(value)}/>
                <span><strong>{label}</strong><small>{detail}</small></span>
              </label>
            ))}
          </div>
        </div>
        <div className="registration-panel"><p className="eyebrow">Step 1</p>
          <h2>{includesChildren ? "Parent or guardian" : "Your contact details"}</h2><p>We will use these details to
            contact you about the application.</p>
          <div className="registration-grid">
            <label>First name *<input required name="firstName" autoComplete="given-name" value={guardian.firstName}
                                      onChange={editGuardian}/></label>
            <label>Last name *<input required name="lastName" autoComplete="family-name" value={guardian.lastName}
                                     onChange={editGuardian}/></label>
            <label>Email address *<input required type="email" name="email" autoComplete="email" pattern="[^ @]+@[^ @]+\.[^ @]{2,}" title="Enter a valid email address, such as name@example.com" value={guardian.email}
                                         onChange={editGuardian}/></label>
            <label>Mobile number *<input required type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern={phonePattern} title="Enter an international phone number, e.g. +447700900123 (no spaces)" value={guardian.phone}
                                         onChange={editGuardian}/><small>Use international format, e.g. +447700900123</small></label>
            {includesChildren &&
                <label>Relationship to student *<select required name="relationship" value={guardian.relationship}
                                                        onChange={editGuardian}>
                    <option>Parent</option>
                    <option>Guardian</option>
                    <option>Other</option>
                </select></label>}
            <label>Address line 1 *<input required name="address1" autoComplete="address-line1"
                                          value={guardian.address1} onChange={editGuardian}/></label>
            <label>Address line 2<input name="address2" autoComplete="address-line2" value={guardian.address2}
                                        onChange={editGuardian}/></label>
            <label>Town / City *<input required name="city" autoComplete="address-level2" value={guardian.city}
                                       onChange={editGuardian}/></label>
            <label>Postcode *<input required name="postcode" autoComplete="postal-code" value={guardian.postcode}
                                    onChange={editGuardian}/></label>
          </div>
        </div>
        <div className="registration-panel"><p className="eyebrow">Step 2</p>
          <h2>{includesChildren ? "Learner details" : "Your learning details"}</h2>
          {includesSelf && <div className="registration-student">
              <div className="registration-student-heading"><h3>My learning application</h3></div>
              <div className="registration-grid">
                  <label>First name *<input required value={selfStudent.firstName} onChange={e => setSelfStudent(s => ({
                    ...s,
                    firstName: e.target.value
                  }))}/></label>
                  <label>Last name *<input required value={selfStudent.lastName} onChange={e => setSelfStudent(s => ({
                    ...s,
                    lastName: e.target.value
                  }))}/></label>
                  <label>Date of birth *<input required type="date" max={new Date().toISOString().slice(0, 10)}
                                               value={selfStudent.dateOfBirth} onChange={e => setSelfStudent(s => ({
                    ...s,
                    dateOfBirth: e.target.value
                  }))}/></label>
                  <label>Area of interest<select value={selfStudent.interests} onChange={e => setSelfStudent(s => ({
                    ...s,
                    interests: e.target.value
                  }))}>
                      <option value="">Select an option</option>
                      <option>Vedam</option>
                      <option>Chanting</option>
                      <option>Vedanta</option>
                      <option>Other / Not sure</option>
                  </select></label>
                  <label className="registration-wide">Previous learning or experience<textarea rows={2}
                                                                                                value={selfStudent.experience}
                                                                                                onChange={e => setSelfStudent(s => ({
                                                                                                  ...s,
                                                                                                  experience: e.target.value
                                                                                                }))}/></label>
                  <label className="registration-wide">Food allergies * (write “None” if applicable)<textarea
                      required rows={2} value={selfStudent.allergies}
                      onChange={e => setSelfStudent(s => ({...s, allergies: e.target.value}))}/></label>
                  <label className="registration-wide">Medical or additional support information (optional)<textarea
                      rows={2} value={selfStudent.medicalNotes}
                      onChange={e => setSelfStudent(s => ({...s, medicalNotes: e.target.value}))}/></label>
              </div>
          </div>}
          {includesChildren && <><p>Add each child who wishes to join Śruti.</p>
            {students.map((student, index) => <div className="registration-student" key={index}>
              <div className="registration-student-heading"><h3>Student {index + 1}</h3>{students.length > 1 &&
                  <button className="registration-remove" type="button"
                          onClick={() => setStudents(current => current.filter((_, i) => i !== index))}><Trash2
                      size={16}/> Remove</button>}</div>
              <div className="registration-grid">
                <label>First name *<input required value={student.firstName}
                                          onChange={e => editStudent(index, {firstName: e.target.value})}/></label>
                <label>Last name *<input required value={student.lastName}
                                         onChange={e => editStudent(index, {lastName: e.target.value})}/></label>
                <label>Date of birth *<input required type="date" max={new Date().toISOString().slice(0, 10)}
                                             value={student.dateOfBirth}
                                             onChange={e => editStudent(index, {dateOfBirth: e.target.value})}/></label>
                <label>Gender (optional)<select value={student.gender}
                                                onChange={e => editStudent(index, {gender: e.target.value})}>
                  <option value="">Prefer not to say / Not specified</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select></label>
                <label>School (optional)<input value={student.school}
                                               onChange={e => editStudent(index, {school: e.target.value})}/></label>
                <label>Area of interest<select value={student.interests}
                                               onChange={e => editStudent(index, {interests: e.target.value})}>
                  <option value="">Select an option</option>
                  <option>Vedam</option>
                  <option>Chanting</option>
                  <option>Vedanta</option>
                  <option>Other / Not sure</option>
                </select></label>
                <label className="registration-wide">Previous learning or experience<textarea rows={2}
                                                                                              value={student.experience}
                                                                                              onChange={e => editStudent(index, {experience: e.target.value})}/></label>
                <label className="registration-wide">Food allergies * (write “None” if applicable)<textarea required rows={2}
                                                                                                     value={student.allergies}
                                                                                                     onChange={e => editStudent(index, {allergies: e.target.value})}/></label>
                <label className="registration-wide">Medical or additional support information (optional)<textarea
                  rows={2} value={student.medicalNotes}
                  onChange={e => editStudent(index, {medicalNotes: e.target.value})}/></label>
                <label className="registration-wide">Student photograph (optional — secure upload coming soon)<input
                  type="file" accept="image/jpeg,image/png,image/webp" disabled
                  aria-describedby={`photo-note-${index}`}/><small id={`photo-note-${index}`}>Photographs will be
                  enabled once the private storage service is connected.</small></label>
              </div>
            </div>)}
              <button type="button" className="button button-outline"
                      onClick={() => setStudents(current => [...current, blankStudent()])}><Plus size={17}/> Add another
                  child
              </button>
          </>}
        </div>
        <div className="registration-panel">
          <p className="eyebrow">Step 3</p>
          <h2>Emergency contact</h2>
          <p>Please provide someone we can contact in an emergency.</p>
          <div className="registration-grid">
            <label>Emergency contact name *
              <input required name="emergencyName" autoComplete="off" value={guardian.emergencyName} onChange={editGuardian}/>
            </label>
            <label>Emergency contact number *
              <input required type="tel" inputMode="tel" name="emergencyPhone" pattern={phonePattern}
                     title="Enter an international phone number, e.g. +447700900123"
                     value={guardian.emergencyPhone} onChange={editGuardian}/>
              <small>Use international format, e.g. +447700900123.</small>
            </label>
          </div>
        </div>
        <div className="registration-panel"><p className="eyebrow">Step 4</p><h2>Confirm & submit</h2>
          <label className="registration-wide">Anything else you would like us to know?<textarea name="additionalNotes"
                                                                                                 rows={3}
                                                                                                 value={guardian.additionalNotes}
                                                                                                 onChange={editGuardian}/></label>
          <label className="registration-check"><input type="checkbox" required checked={consent}
                                                       onChange={e => setConsent(e.target.checked)}/><span>I confirm that I am authorised to submit these details and agree that Śruti may use them to process this registration and contact me. *</span></label>
          <label className="registration-check"><input type="checkbox" checked={photoConsent}
                                                       onChange={e => setPhotoConsent(e.target.checked)}/><span>I consent to photographs, videos and audio recordings of myself/my child being used by Sruti Academy for academy activities and promotional purposes, and understand that I can withdraw my consent at any time.(optional).</span></label>
          {status === "error" && <div className="registration-error" role="alert">{error}</div>}
          <button type="submit" className="button button-dark"
                  disabled={busy || !endpoint}>{busy ? "Submitting…" : "Submit registration"}<ArrowRight size={17}/>
          </button>
          <p className="registration-fineprint">Your registration is subject to review and is not confirmation of a
            class place.</p>
        </div>
      </form>
    </section>
  </>;
}
