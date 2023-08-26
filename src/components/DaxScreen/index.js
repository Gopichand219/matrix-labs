import {Component} from 'react'
import Navbar from '../Navbar'
import TokenItem from '../TokenItem'
import './index.css'

class DaxScreen extends Component {
    state = {
        searchInput : '',
        activePath : 'Token',
        fetchedData : [],
    }

    componentDidMount () {
      	this.getTokenItems()
    }

    changePath = path => {
        this.setState({activePath : path})
    }

    getTokenItems = async () => {
        const {activePath} = this.state
        const apiUrl  = activePath === 'Token' ? `https://api.dexscreener.com/latest/dex/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d` : 'https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae'
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data.pairs)
        this.setState({fetchedData : data.pairs})
    }

    onChangeSearchInput = event => {
        this.setState({searchInput : event.target.value})
    }

    renderItems = () => {
        const {activePath , fetchedData} = this.state
        console.log(fetchedData.length)

        return (
            <div >
                <h1 >{activePath} Results</h1> 
								<ul className='dax-screen-token-list'>
                {fetchedData.length !== 0 ? fetchedData.map(each => <TokenItem itemDetails = {each} key = {each.fdv}/>) : null}
								</ul>
            </div>
        )
    }

    render () {
        const {searchInput , fetchedData} = this.state
        console.log(fetchedData)

        return (
            <div className='dax-screen-bg'>
                <Navbar changePath = {this.changePath}/>
								<div className='dax-screen-main-conatiner'>
								<div className='dax-screen-search-container'>
                <input type = 'search' value = {searchInput} onChange={this.onChangeSearchInput} className='dax-screen-search-input'/>
								</div>
                {this.renderItems()}
								</div>
            </div>
        )
    }
}

export default DaxScreen