import { Flex} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useFlags } from "../../../common/hooks/useFlags";
import { Avatar } from "@chakra-ui/avatar";

const ConverterOptions = ({symbol, currencyList, onCurrencyChange, currency}) => {
    const {flagUrl} = useFlags(currency)
    return(
        <Flex gap="1rem" padding="1rem" shadow="md" borderRadius="lg">
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

export default ConverterOptions;