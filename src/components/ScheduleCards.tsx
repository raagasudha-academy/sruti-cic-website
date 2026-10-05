import type { Session } from "../data/learning";

type ScheduleCardsProps = {
  sessions: Session[];
};

export default function ScheduleCards({ sessions }: ScheduleCardsProps) {
  return (
    <div className="schedule-list">
      {sessions.map((session) => (
        <article className="schedule-row" key={`${session.name}-${session.day}`}>
          <div className="schedule-name">
            <h3>{session.name}</h3>
            <div className="badges">
              <span>{session.type}</span>
              {session.restricted && <span className="badge-muted">Registered only</span>}
              {session.stat && <span className="badge-stat">{session.stat}</span>}
            </div>
          </div>
          <div>
            <small>Day</small>
            <strong>{session.day}</strong>
          </div>
          <div>
            <small>Time</small>
            <strong>{session.time}</strong>
          </div>
          <div>
            <small>Age group</small>
            <strong>{session.age}</strong>
          </div>
          <div className="schedule-location">
            <small>Location</small>
            <strong>{session.location}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
