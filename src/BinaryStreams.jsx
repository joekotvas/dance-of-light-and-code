function BinaryStreams({ count = 10 }) {
  return (
    <div className="binary-streams">
      {Array.from({ length: count }).map((_, index) => {
        const binaryString = new Array(20)
          .fill(0)
          .map(() => (Math.random() < 0.5 ? '0' : '1'))
          .join('')

        const streamOffset = Math.random() * 100

        return (
          <span
            key={index}
            className="stream"
            style={{ top: `${index * 10}%`, left: `${streamOffset}%` }}
          >
            {binaryString}
          </span>
        )
      })}
      <style jsx>{`
        .binary-streams {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .stream {
          position: absolute;
          font-family: 'Courier New', monospace;
          color: rgba(255, 255, 255, 0.2);
          font-size: 1.75rem;
          white-space: nowrap;
          z-index: 0;
          animation: flowStream 100s linear infinite;
          filter: blur(1px);
        }

        @keyframes flowStream {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}

export default BinaryStreams
