export interface Alumni {
  id: string;
  name: string;
  email: string;
  waNum: string;
  linkedin: string;
  degree: string;
  department: string;
  image: string;
  alumni: boolean;
  gradYr: number;
  proofOfGrad: string;
  verified: boolean;
  currWorkplace: string;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  waNum: string;
  linkedin: string;
  password: string;
  degree: string;
  department: string;
  alumni: boolean;
  gradYr: number;
  proofOfGrad: string;
  currWorkplace: string;
  image: string;
  verified: boolean;
}
