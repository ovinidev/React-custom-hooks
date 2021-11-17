import { Image } from './styles';

type Props = {
  url: string;
}

export const Photo = ({ url }: Props) => {
  return (
    <Image src={url}/>
  );
};