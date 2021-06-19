import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface StepsProps {
  current: number;
}

type Step = { id: number; title: string };

const StepItems: Step[] = [
  { id: 1, title: "Create Account" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
  { id: 4, title: "Review Order" },
];

const Steps: React.FC<StepsProps> = ({ current = 1 }) => {
  return (
    <Box w="100%" justifyContent="space-around" display="flex">
      {StepItems.map((step: Step, index: number) => (
        <Box key={index} cursor="pointer">
          <Text
            as="span"
            boxShadow="rgb(146 153 184 / 30%) 10px 0px 20px"
            w="50px"
            h="50px"
            lineHeight="50px"
            background="whiteAlpha.900"
            padding="25px 30px"
            borderRadius="50%"
            _hover={{ background: "gray.100" }}
          >
            {step.id}
          </Text>
          <Text
            mt="8"
            textAlign="center"
            color={index + 1 > current ? "gray.400" : "gray.900"}
          >
            {step.title}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Steps;
