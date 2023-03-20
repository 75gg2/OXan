
export interface StartGame {
  n:number,m:number,p:number
}
export const startGameDefaults:StartGame = {
  n: 5,
  m: 5,
  p: 5
}

export type FieldValue = 0|1|2
