import { tempoTranscript } from '../data/tempoTranscript'

export default function TempoTranscript() {
  const { turns, recordedOn, toolLoadingOmitted } = tempoTranscript

  if (!turns || turns.length === 0) {
    return null
  }

  return (
    <figure className="tempo-transcript" id="tempo-transcript">
      {turns.map((turn, i) => {
        if (turn.role === 'tool') {
          return (
            <p key={i} className="tempo-transcript-tool">
              Called {turn.toolName}
            </p>
          )
        }
        return (
          <p key={i} className={`tempo-transcript-turn tempo-transcript-${turn.role}`}>
            <span className="tempo-transcript-role">
              {turn.role === 'user' ? 'You' : 'Claude'}
            </span>
            {turn.text}
          </p>
        )
      })}
      <figcaption>
        One recorded session{recordedOn ? `, ${recordedOn}` : ''}. Text reproduced as recorded
        {toolLoadingOmitted ? ', with a tool-loading step omitted' : ''}. All data is fictional.
      </figcaption>
    </figure>
  )
}
