import { Photo } from '../../components/Photo';
import { Container, Grid } from './styles';

export default function ImagesGallery() {

  return (
    <Container>
      <h1>Galeria DE IMAGENS</h1>

      <Grid>
        <Photo url={"https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/10/000-9pz83w.jpg"} />
        <Photo url={"https://cultura.uol.com.br/upload/tvcultura/esporte/20210928180826_lionelmessi.jpg"} />
        <Photo url={"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/07/messi-barcelona-la-liga-photo-by-eric-alonso.jpg"} />
        <Photo url={"https://midia.gruposinos.com.br/_midias/jpg/2020/08/30/barcelona-19160237.jpg"} />
        <Photo url={"https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75ce76a9db0cc610/60dc07df5543520fcbc3c25c/f93c6725435df589a5df04fad3da301c3762536d.jpg?auto=webp&fit=crop&format=jpg&quality=100"} />
        <Photo url={"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/05/barcelona_messi.jpg"} />
      </Grid>
    </Container>
  );
};