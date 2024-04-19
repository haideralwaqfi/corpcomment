import { useEffect } from "react";
import { useState } from "react";

export default function (wordsLeft) {
  const [disabledWriting, setDisabledWriting] = useState(false);
  useEffect(() => {
    if (wordsLeft <= 0) setDisabledWriting(true);
  }, [wordsLeft]);
  return disabledWriting;
}
