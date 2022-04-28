export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export enum TypographyFontSizes {
  fz9 = 'fz9',
  fz12 = 'fz12',
  fz14 = 'fz14',
  fz16 = 'fz16',
  fz18 = 'fz18',
  fz24 = 'fz24',
  fz28 = 'fz28',
  fz36 = 'fz36',
  fz48 = 'fz48',
  fz56 = 'fz56',
  fz60 = 'fz60',
  fz100 = 'fz100',
  fz200 = 'fz200',
}

export enum TextInputTypes {
  tel = 'tel',
  text = 'text',
  email = 'email',
  password = 'password',
}

export enum TypographyFontWeight {
  regular = 'regular',
  bold = 'bold',
}

export interface Error {
  field: string;
  message: string;
}
