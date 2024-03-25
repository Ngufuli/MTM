import { Spinner } from "@chakra-ui/spinner";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useCurrency } from "../common/hooks/useCurrency";
import ConverterHeader from "./components/ConverterHeader";

const Converter = () => {
    const {
        isLoading,
        isError,
        amount, 
        setAmount,
        currencyOne, 
        setCurrencyOne,
        currencyTwo,
        setCurrencyTwo,
        ratesData,
        symbolsData,
        convertedAmount,
        date,
        time,
        currencyList
    } = useCurrency();

    if(isError){
        return(
            <Text fontWeight='bold' fontSize='3xl' color='white' my='10'>Something has gone wrong</Text>
        )
    }

    if(isLoading){
        return(
            <Spinner margin='auto 0' size='xl' thickness="4px" speed="0.66s" color="purple.500" emptyColor="purple.200"></Spinner>
        )
    }
    return(<Box width={{base:"90vw", sm:"45vw"}} margin="0 auto">
        <ConverterHeader/>
    </Box>)
}

export default Converter;