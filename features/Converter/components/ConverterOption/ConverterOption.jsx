import { Flex } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Avatar } from "@chakra-ui/avatar";
import { useFlags } from "../../../common/hooks/useFlags";


const ConverterOption = ({symbol, currency, currencyList, onCurrencyChange}) => {
    const {flagUrl} = useFlags(currency)
    return (
        <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
            <Avatar src={flagUrl} size="xs"/>
            <Select variant="unstyled" size="md" defaultValue={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
            {
                    currencyList.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency} - {symbol[currency]}
                        </option>
                    ))
                }
            </Select>
        </Flex>
    )
}

export default ConverterOption