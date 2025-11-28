export interface Answer extends Array<Color> {
  0: Color
  1: Color
  2: Color
  3: Color
  length: 4
}

export type BlackOrWhite = "black" | "white"

export interface Clue extends Array<BlackOrWhite> {
  0: BlackOrWhite
  1: BlackOrWhite
  2: BlackOrWhite
  3: BlackOrWhite
  length: 4
}



export enum Color {
  Empty = "",
  Red ="red",
  Orange ="orange",
  Yellow = "yellow",
  Green = "green",
  Blue = "blue",
  Purple = "purple"
}
