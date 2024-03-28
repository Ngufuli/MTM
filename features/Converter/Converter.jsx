import { Spinner } from "@chakra-ui/spinner";
import { Grid, GridItem, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useCurrency } from "../common/hooks/useCurrency";
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";

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
        <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)" padding={{base:"6", sm:"10"}} gap="1rem" backgroundColor="#e5e5e5" borderRadius="lg">
           
            <GridItem colSpan={{base:5, sm:2}} justifySelf="center" alignSelf="center">
            <ConverterOption 
            symbol={symbolsData.data} 
            currencyList={currencyList} 
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
        /> 
            </GridItem>

            <GridItem display={{base:'none', sm:'block'}} colSpan={1} justifySelf="center" alignSelf="center">
                <RepeatIcon boxSize="2rem" color="purple.500"/>
            </GridItem>

            <GridItem colSpan={{base:5, sm:2}} justifySelf="center" alignSelf="center">
                <ConverterOption 
                symbol={symbolsData.data} 
                currencyList={currencyList} 
                onCurrencyChange={setCurrencyTwo}
                currency={currencyTwo}
                />
            </GridItem>

            <GridItem colSpan={2}>
            <ConverterInput value={amount} onAmountChange={setAmount}/>
            </GridItem>

            <GridItem colSpan={3} justifySelf="right" alignSelf="right">
            <ConverterDisplay 
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            ratesData={ratesData.data}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
            />
            </GridItem>
        </Grid>
       
        <Text marginTop="1rem" fontSize="sm" textAlign="center" color="#e5e5e5">Built with 💜 by <a href="https://ultimaxdev.com">UltimaxDev </a></Text>
        
    </Box>)
}

export default Converter;