import { Container, TopLeft, BottomLeft, BottomRight, Hamburger, Lvlx } from './styles'
import { VelvetBanana } from './VelvetBanana'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          BANANA
          <br />
          FINANCE —
        </h1>
        <p><Lvlx>a LVLX project —</Lvlx></p>
      </TopLeft>
      <BottomLeft>
        <a href="mailto:twizzwrrld@gmail.com">Contact</a>
      </BottomLeft>
      <BottomRight>
        Swaps
        <br />
        Escrow
        <br />
        Staking
        <br />
        Stabletokens
        <br />
        Token Locking
        <br />
        Liquidity Mining
        <br />
        Orderbook DEX
        <br />
        Private Transfers
        <br />
        Buy now Pay later
        <br />
        Oracle-Based DEX
        <br />
        Interest Rate Swaps
        <br />
        Reversible Payments
        <br />
        Automated Market Makers
        <br />
        Lending Protocols (Over-, Under- Collateralized, Fixed-rate P2P)
        <br />
      </BottomRight>
      <Hamburger>
        X
      </Hamburger>
    </Container>
  )
}
