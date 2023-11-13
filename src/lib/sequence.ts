export function sequence(startIndex = 1) {
  let currentSequence = startIndex;

  return function (reposition?: number) {
    if (reposition) currentSequence = reposition;
    const position = currentSequence;
    currentSequence++;
    return position;
  };
}
