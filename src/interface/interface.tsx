interface IHeroes {
  id?: number;
  name: string;
  description?: string;
  date?: string;
  image: string;
  upload?: Blob | MediaSource | undefined;
  belonging: string;
  cost: number;
  frame?: boolean;
}

export default IHeroes;
