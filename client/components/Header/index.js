import { Container,
  HeaderItems,
  HeaderItem,
  HeaderItemLink
} from './styles';
import headerItems from './items';

const component = () => (
  <Container>
    <HeaderItems>
      {headerItems.map((item) => (
        <HeaderItem>
          <HeaderItemLink
            to={`${item.path}`}
            exact
            activeStyle={{
              color: 'yellow'
             }}
          >{`${item.name}`}
          </HeaderItemLink>
        </HeaderItem>
      ))}
    </HeaderItems>
  </Container>
);

export default component;
