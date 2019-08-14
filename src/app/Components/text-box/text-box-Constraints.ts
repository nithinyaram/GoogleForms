export class TextBoxConstraints {
  lable: Text;
  minLength: number;
  maxLenght: number;
  isRequired: boolean;
  textType: Text;

  constructor(label, minLen, maxLen, isRequired, textType) {
    this.lable = label;
    this.minLength = minLen;
    this.maxLenght = maxLen;
    this.isRequired = isRequired;
    this.textType = textType;
    console.log("My Constructor");
  }


}
