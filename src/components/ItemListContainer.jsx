import { Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Text fontFamily="Calibri" as="b" fontSize="4xl" color="#6b46c1">
        {greeting}
      </Text>
    </>
  );
};

export default ItemListContainer;
