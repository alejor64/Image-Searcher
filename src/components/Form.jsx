import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({setSearch}) => {

    const [category, setCategory] = useState('')
    const [error, setError] = useState(false)

    const searchImg = (e) => {
        e.preventDefault()

        if(!category.trim()){
            setError(true)
            return
        }

        setError(false)
        setSearch(category)
    }

    return (
        <form
            onSubmit={searchImg}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search an Image"
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        placeholder="Search"
                    />
                </div>
            </div>
            {error && <Error mensaje="Type a Category to Search" />}
        </form>
    )
}

Form.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default Form
