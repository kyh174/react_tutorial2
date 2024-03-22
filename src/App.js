import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    }
  };
}



export default function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [text, setText] = useState('');

  // return (
  //   <>
  //     <input value={text} onChange={e => setText(e.target.value)} />
  //     <button onClick={() => setIsPlaying(!isPlaying)}>
  //       {isPlaying ? 'Pause' : 'Play'}
  //     </button>
  //     <VideoPlayer
  //       isPlaying={isPlaying}
  //       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  //     />
  //   </>
  // );

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    
    return () => {
      connection.disconnect();
    }
  }, []);
  return <h1>Welcome to the chat!</h1>;
}