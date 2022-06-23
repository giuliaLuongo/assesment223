export interface Pop{
  id : number,
  name : string,
  powerScore : number,
  ability:string,
  releaseDate:string,
  isFavourite : boolean,
  price : number | undefined,
  rarity : string | undefined,
  totalAppearances : number | undefined,
  isAnAvenger: boolean | undefined,
  img : string;
}
