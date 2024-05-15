import { Container } from "@mui/material"
import { Products } from "./components/Products"
import { Filter } from "./components/Filter"
import { Search } from "./components/Search"


function App() {


  return (
    <>
      <Container>
        <Filter />
        <Search/>
        <Products />
      </Container>
    </>
  )
}

export default App
