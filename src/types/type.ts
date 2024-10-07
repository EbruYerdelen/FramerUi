export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  altText: string;
  reverse?: boolean;
};


export type InfoCardItem = {
  letter: string;
  order: string;
  header: string;
  description: string;
  
}

export type faqItem = {
  id: number;
  question: string;
  text1?: string;
  text2?: string;
}

export type commenterBlock = {
  name: string;
  role: string;
  company: string;
  project: string;
  image: string;
  comment: string;
};