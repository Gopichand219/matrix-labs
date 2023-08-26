const TokenItem = props => {
    const {itemDetails} = props
    const {
        dexId,
        priceNative,
        priceUsd,
        baseToken,
        pairAddress,
        quoteToken,
    } = itemDetails
    const {
        address ,name , symbol
    } = baseToken
    console.log(name)
    console.log(itemDetails.baseToken)
    console.log(itemDetails)

    return (
        <li className="dax-screen-token-item-container">
            <table className="dax-screen-token-item">
                    <h2>Basic Info </h2>
                    <tr >
                        <td>Pair Created At </td>
                        <td>{name}</td>
                    </tr>
                    <tr >
                        <td>Symbol</td> 
                        <td>{symbol}</td>
                    </tr>
                    <tr >
                        <td>Dex Id</td> 
                        <td >{dexId}</td>
                    </tr>
                    <tr >
                        <td>Pair Address </td>
                        <td >{pairAddress}</td>
                    </tr>
                </table>
                <table className="dax-screen-token-item" >
                    <h2>Base Token</h2>
                    <tr >
                        <td>Name </td>
                        <td>{name}</td>
                    </tr>
                    <tr >
                        <td>Symbol</td> 
                        <td>{symbol}</td>
                    </tr>
                    <tr >
                        <td>Address </td>
                        <td >{address}</td>
                    </tr>
                </table>
                <table className="dax-screen-token-item" >
                    <h2>Quote Token</h2>
                    <tr >
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr >
                        <td>Symbol</td> 
                        <td>{symbol}</td>
                    </tr>
                    <tr >
                        <td>Address </td>
                        <td >{quoteToken.address}</td>
                    </tr>
                </table>
                <table className="dax-screen-token-item" >
                    <h2>Price</h2>
                    <tr >
                        <td>Price Native </td>
                        <td>{priceNative}</td>
                    </tr>
                    <tr >
                        <td>Price USD</td> 
                        <td>{priceUsd}</td>
                    </tr>
                </table>
        </li>
    )
}

export default TokenItem