import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import founder from "../src/assets/Founder.jpg";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} alignItems={"center"} h={"full"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto website which provides full information about
            cryto currency.
          </Text>
        </VStack>

        <VStack>
          <Avatar
            boxSize={"28"}
            mt={["4", "0"]}
            src={founder}
            style={{
              height: "140px",
            }}
          />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
