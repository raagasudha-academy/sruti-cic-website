
import { useRef, useState } from "react";
import {
  Headphones,
  Pause,
  Play,
  Repeat,
  RotateCcw,
} from "lucide-react";
import "../styles/chalisaAudio.css";

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/hanuman-chalisa-doha-1.m4a`;

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function ChalisaAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [repeat, setRepeat] = useState(false);
  const [error, setError] = useState(false);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
      setError(false);
    } catch {
      setError(true);
    }
  }

  function restart() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
  }

  function changeSpeed(value: number) {
    if (audioRef.current) {
      audioRef.current.playbackRate = value;
    }
    setSpeed(value);
  }

  function seek(value: number) {
    if (!audioRef.current || !duration) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <section
      className="lyrics-study-card audio-practice-card"
      aria-label="Hanuman Chalisa audio practice"
    >
      <div className="lyrics-badge">
        Listen &amp; Practise - Doha
      </div>

      <div className="lyrics-study-box">
        <audio
          ref={audioRef}
          src={AUDIO_SRC}
          preload="metadata"
          loop={repeat}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) =>
            setCurrentTime(e.currentTarget.currentTime)
          }
          onLoadedMetadata={(e) =>
            setDuration(e.currentTarget.duration)
          }
          onError={() => setError(true)}
        />

        <div className="audio-compact-layout">
          {/* LEFT: Description and progress */}
          <div className="audio-compact-main">
            <div className="audio-compact-heading">
              <Headphones size={25} aria-hidden="true" />
              <p>
                Listen carefully, follow the words and chant along!
              </p>
            </div>

            <div className="audio-progress">
              <input
                type="range"
                min={0}
                max={duration || 1}
                step={0.1}
                value={currentTime}
                onChange={(e) =>
                  seek(Number(e.target.value))
                }
                disabled={!duration}
                aria-label="Audio position"
              />

              <div className="audio-time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* CENTER: Playback buttons */}
          <div className="audio-controls">
            <button
              type="button"
              className="audio-small-button"
              onClick={restart}
              aria-label="Restart audio"
              title="Start again"
            >
              <RotateCcw size={19} />
            </button>

            <button
              type="button"
              className="audio-play-button"
              onClick={togglePlay}
              aria-label={playing ? "Pause audio" : "Play audio"}
            >
              {playing ? (
                <Pause size={24} />
              ) : (
                <Play size={24} />
              )}
            </button>

            <button
              type="button"
              className={`audio-small-button ${repeat ? "active" : ""}`}
              onClick={() => setRepeat(!repeat)}
              aria-label={repeat ? "Turn repeat off" : "Turn repeat on"}
              aria-pressed={repeat}
              title="Repeat audio"
            >
              <Repeat size={19} />
            </button>
          </div>

          {/* RIGHT: Speed selection */}
          <div className="audio-speed">
            <span>Speed:</span>

            <div className="audio-speed-options">
              {[0.75, 1, 1.25].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={speed === value ? "selected" : ""}
                  onClick={() => changeSpeed(value)}
                  aria-pressed={speed === value}
                >
                  {value}×
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <p className="audio-error" role="alert">
            Audio unavailable. Please check the recording file.
          </p>
        )}
      </div>
    </section>
  );
}
