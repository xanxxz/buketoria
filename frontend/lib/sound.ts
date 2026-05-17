let audioCtx: AudioContext | null = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

export function playBeep(type: 'new' | 'error' = 'new') {
  const ctx = getCtx();

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'new') {
    oscillator.frequency.value = 880;
  } else {
    oscillator.frequency.value = 220;
  }

  gain.gain.value = 0.1;

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.15);
}