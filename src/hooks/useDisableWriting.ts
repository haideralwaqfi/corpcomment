import { useEffect } from "react";
import { useState } from "react";

export default function (wordsLeft: number): boolean {
  const [disabledWriting, setDisabledWriting] = useState<boolean>(false);
  useEffect(() => {
    if (wordsLeft <= 0) setDisabledWriting(true);
  }, [wordsLeft]);
  return disabledWriting;
}
