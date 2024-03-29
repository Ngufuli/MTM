import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

const ConverterInput = ({value, onAmountChange}) => {
    return(
        <>
        <FormLabel htmlFor="amount" color="purple.300">
            Amount
        </FormLabel>
        <Input 
            id="amount" 
            focusBorderColor="purple.300"
            borderColor="purple.300"
            size="lg" 
            type="number" 
            value={value} 
            min={0} 
            onChange={(e) => onAmountChange(e.target.value)}
        />
        </>
    )
}

export default ConverterInput;