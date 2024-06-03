export const decodeUnicode = (str: string) => {
  return str.replace(/\\u[\dA-F]{4}/gi, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });
};

export const playAudio = (audioUrl: string) => {
  const audio = new Audio(audioUrl);
  audio.play();
};

export const percentage = (numerator: number, denominator: number) => {
  return Math.floor((numerator / denominator) * 100);
};