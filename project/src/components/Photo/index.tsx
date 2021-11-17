import { Image } from './styles';

type Props = {
  url: string;
  onClick?: () => void;
}

export const Photo = ({ url, onClick }: Props) => {
  return (
    <Image src={url} onClick={onClick}/>
  );
};