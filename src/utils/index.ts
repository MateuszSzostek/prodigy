export function generateId(): string {
  let result: string = "";
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength: number = characters.length;
  let counter: number = 0;
  while (counter < 16) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getRandomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function spliceIntoChunks(arr: any[] = [], chunkSize: number = 10) {
  const res: any[] = [];
  while (arr.length > 0) {
    const chunk: any[] = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

export function blockNoRefStr(el: any, fallback: string = "") {
  return el != null ? el : fallback;
}
