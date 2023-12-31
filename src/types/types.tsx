export interface Alumni {
    id: string;
    name: string;
    image: string;
    batch: string;
    worksAt: string;
    linkedinProfile: string;
  };

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