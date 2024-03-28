import { Box, Text } from "@chakra-ui/layout";

const ConverterHeader = () => {
    return(
        <Box
            textAlign="center"
            color="white"
            marginTop="20"
            marginBottom="10"
        >
            <Text fontWeight="bold" fontSize="2xl">MTM - Exchange Rates</Text>
            <Text>Up to date FX Rates and Affordable money transfer rates</Text>
        </Box>
    )
}

export default ConverterHeader;