import { Flex } from "@chakra-ui/layout"
import Converter from "../features/Converter"


function App() {

  return (
    <>
      <Flex bgGradient="linear(to-t, #ae085c, #2e0656)" height="100vh" justify="center">
        <Converter/>
      </Flex>
    </>
  )
}

export default App
