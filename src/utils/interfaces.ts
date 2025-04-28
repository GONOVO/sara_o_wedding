export interface IPortfolioitem {
  image: string;
  maleName: string;
  femaleName: string;
}

export interface IPackage {
  img: string;
  list: string[];
  title: string;
  // btnText: string;
}

export interface IPerson {
  image: string;
  name: string;
  desc: string[];
  bio: string;
  caption: string;
}

export interface IModal {
  clickedImage: string;
  choosedCoupleImages: string[];
}

export interface IViewimage {
  imageSrc: string;
  height?: string;
  mb?: string;
  positionY?: string;
  title?: string;
}
