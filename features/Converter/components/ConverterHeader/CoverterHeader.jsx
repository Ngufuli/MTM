import { Box, Text } from "@chakra-ui/layout";

const ConverterHeader = () => {
    return(
        <Box
            textAlign="center"
            color="white"
            marginTop="20"
            marginBottom="10"
        >
            <Text fontWeight="bold" fontSize="2xl">Currency converter and Exchange Rate</Text>
        </Box>
    )
}

export default ConverterHeader;