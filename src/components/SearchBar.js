import React from "react"
import youtube from "../components/apis/youtube"


class SearchBar extends React.Component{
    state= {term: ""}

    onInputChange = (e)=>{
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e)=>{
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>video search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                         />
                    </div>
                </form>

            </div>
        )
    }
}
export default SearchBar