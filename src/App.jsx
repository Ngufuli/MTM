import { Flex } from "@chakra-ui/layout"
import Converter from "../features/Converter"

function App() {


  return (
    <>
    <Flex bgGradient="linear(to-t,#0bda51,#015a22)" height="100vh" justifyContent="center">
      <Converter/>
    </Flex>
    </>

  )
}

export default App
