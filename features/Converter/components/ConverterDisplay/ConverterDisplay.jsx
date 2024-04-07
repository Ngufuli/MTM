import { Box, Text } from "@chakra-ui/layout";

const ConverterDisplay = ({
    amount,
    currencyOne,
    currencyTwo,
    convertedAmount,
    date,
    time,
}) => {
    return(
        <Box textAlign="right">
            <Text fontSize="lg" fontWeight="bold" color="#0bda51">
                {amount} {currencyOne}
            </Text>

            <Text fontSize="2xl" fontWeight="bold" color="#0bda51">
                {convertedAmount} {currencyTwo}
            </Text>

            <Text fontSize="xs" color="#50c878">
                Markets rates collected: {date} {time}
            </Text>
        </Box>
    )
}

export default ConverterDisplay;