
export interface Application {
  id: number;
  lable:string;
  minLength:number;
  maxLength:number;
  isRequired:boolean;
  textType:number;
  ty:string;
  isMinLengthSatisfied:boolean,
  isMaxLengthSatisfied :boolean;
}
