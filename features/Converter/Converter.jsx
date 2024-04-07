import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { useCurrency } from "../common/hooks/useCurrency";
import { Spinner } from "@chakra-ui/spinner";
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";


const Converter = () => {

    const  {
        isError,
        isLoading,
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
    } = useCurrency()

    if(isError) return (<Text fontWeight="bold" fontSize="3xl" color="white" my="10">Something went wrong</Text>);

    if(isLoading) return(
        <Spinner margin="auto 0" size="xl" thickness="4px" speed="0.66s" color="#fffdd0" emptyColor="#fffdd0"/>
    )
    return (
        <Box width={{base: "90vw", sm:"45vw"}} margin="0 auto">
            <ConverterHeader/>

            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)" padding={{base:"6", sm:"10"}} gap="1rem" borderRadius="lg" backgroundColor="#fffdd0">
                <GridItem colSpan={{base: 5, sm: 2}} justifySelf="center" alignSelf="center">
                    <ConverterOption symbol={symbolsData.data} currencyList={currencyList} currency={currencyOne} onCurrencyChange={setCurrencyOne}/>
                </GridItem>

                <GridItem display={{base: 'none', sm:'block'}} colSpan={1} justifySelf="center" alignSelf="center">
                    <RepeatIcon boxSize="2rem" color="#0bda51"/>
                </GridItem>

                <GridItem colSpan={{base: 5, sm: 2}} justifySelf="center" alignSelf="center">
                    <ConverterOption symbol={symbolsData.data} currencyList={currencyList} currency={currencyTwo} onCurrencyChange={setCurrencyTwo}/>
                </GridItem>

                <GridItem colSpan={2}>
                    <ConverterInput value={amount} onAmountChange={setAmount}/>
                </GridItem>

                <GridItem colSpan={3} justifySelf="right" alignSelf="right">
                    <ConverterDisplay
                        amount={amount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                        convertedAmount={convertedAmount}
                        date={date}
                        time={time}
                    />
                </GridItem>
            </Grid>
            <Text marginTop="1.5rem" color="white" textAlign="center" padding="10">Build with 💜 by <b>NICK</b> using React, ReactQuery, Chakra-UI and Axios</Text>
               
        </Box>
    );
};

export default Converter;