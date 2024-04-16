import React from "react";
import { Box, Heading, Text, Button, Flex, Grid, Image, Container, Icon } from "@chakra-ui/react";
import { FaLeaf, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Organic Matcha Green Tea",
    description: "Premium quality organic matcha green tea powder. Boost your energy and focus naturally.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwbWF0Y2hhJTIwZ3JlZW4lMjB0ZWElMjBwb3dkZXIlMjBnb2xkZW58ZW58MHx8fHwxNzEzMjQzMzk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Turmeric & Ginger Herbal Tea",
    description: "Soothing blend of turmeric, ginger, and other natural herbs. Support digestion and immunity.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMGdpbmdlciUyMGhlcmJhbCUyMHRlYSUyMGdvbGRlbnxlbnwwfHx8fDE3MTMyNDMzOTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Lavender Essential Oil",
    description: "Pure lavender essential oil for aromatherapy. Relax your mind and body.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGVzc2VudGlhbCUyMG9pbCUyMGdvbGRlbnxlbnwwfHx8fDE3MTMyNDMzOTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="white" color="gray.700">
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd2VsbG5lc3MlMjBiYWNrZ3JvdW5kJTIwZ29sZGVufGVufDB8fHx8MTcxMzI0MzM5OXww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" py={40}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4} color="white">
            Nourish Your Well-being
          </Heading>
          <Text fontSize="xl" mb={8} color="white">
            Discover our curated collection of natural wellness products to elevate your mind, body, and soul.
          </Text>
          <Button colorScheme="green" size="lg" rightIcon={<FaLeaf />}>
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Featured Products
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {products.map((product) => (
              <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" boxShadow="md">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    {product.name}
                  </Heading>
                  <Text mb={4}>{product.description}</Text>
                  <Flex align="center" justify="space-between">
                    <Text fontWeight="bold">{product.price}</Text>
                    <Button colorScheme="green" size="sm" rightIcon={<FaShoppingCart />}>
                      Add to Cart
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Natural & Sophisticated */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(2, 1fr)" gap={10} alignItems="center">
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Natural Meets Sophisticated
              </Heading>
              <Text fontSize="lg" mb={6}>
                We believe that wellness should be both natural and sophisticated. Our products are crafted with the finest ingredients nature has to offer, presented in an elegant and luxurious way.
              </Text>
              <Button colorScheme="green" size="lg">
                Learn More
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd2VsbG5lc3MlMjBwcm9kdWN0cyUyMGdvbGRlbnxlbnwwfHx8fDE3MTMyNDM0MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Natural and Sophisticated" borderRadius="lg" boxShadow="md" />
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Wellness Co.
              </Heading>
              <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
            </Box>
            <Flex>
              <Icon as={FaLeaf} boxSize={6} mr={4} />
              <Icon as={FaShoppingCart} boxSize={6} />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
