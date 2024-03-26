import { Flex} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";

const ConverterOption = ({symbol, currencyList, onCurrencyChange, currency}) => {
    return(
        <Flex gap="1rem" padding="1rem" shadow="md" borderRadius="lg">
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

export default ConverterOption;