import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

const ConverterInput = ({value, onAmountChange}) => {
    return (
        <>
            <FormLabel htmlFor="amount" color="#faf4dc.300">
                Amount
            </FormLabel>
            <Input borderColor="purple.300" focusBorderColor="purple.300" id="amount" size="lg" type="number" value={value} min={0} onChange={(e) => onAmountChange(e.target.value)}/>
        </>
    )
}

export default ConverterInput;