import { Container, SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <Container maxW="container.xl">
        <SimpleGrid
          spacing={2}
          templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        >
          {items?.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ItemList;
