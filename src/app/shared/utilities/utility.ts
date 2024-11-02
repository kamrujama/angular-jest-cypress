export const range = (start:number, end:number) => {
  return [...Array(end - 1).keys()].map(i => i + start);
}

export const pluck = (array: any[], property: string) => {
  return array.map(item => item[property]);
}
