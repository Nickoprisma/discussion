import React from 'react';
import { Box, Center, Image, Flex, Text } from "@chakra-ui/react";

const NFTCollection = ({ collection }) => {
  return (
    <>
      <NFT item={collection} />
      <NFTCollectionLink />
    </>
  );
};

export default NFTCollection;

const NFT = ({ item }) => {
  return (
    // Check the library documentation to improve the look and feel 
    // https://chakra-ui.com/docs/media-and-icons/image
    <Center>
      <Box p="5" maxW="460px" borderWidth="1px">
        <Flex align="baseline" mt={2}>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {item.name}
          </Text>
        </Flex>
        <Image borderRadius="md" src={item.image_url} />
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {item.description}
        </Text>
      </Box>
    </Center>
  );
};

const NFTCollectionLink = () => {
  return (
      <a
        className="App-link"
        href="https://opensea.io/collection/questioning-and-understanding-expands-wisdom"
        target="_blank"
        aria-label="Navigate to the opensea collection Discussion"
        rel="noopener noreferrer"
      >
        See the entire collection
      </a>  
  );
};
