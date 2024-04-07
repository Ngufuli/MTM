import { Box, Text } from "@chakra-ui/layout";

const ConverterHeader = () => {
    return (

            <Box textAlign="center" color="#faf4dc" marginTop="20" marginBottom="10">
                <Text fontWeight="bold" fontSize="3xl">MTM - Money Transfer</Text>
                <Text fontWeight="light" fontSize="2xl">Up to date FX rates</Text>
            </Box>

    )
}

export default ConverterHeader;