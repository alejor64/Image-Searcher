import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import ImgList from './components/ImgList'

const App = () => {

    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])
    const [currentPages, setCurrentPages] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(()=>{
        
        const searchApi = async () => {

            if(!search) return null
            const imgPerPage = 30
            const key = '16770978-4f917130cfbcec6696e5d34d2'
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}&page=${currentPages}`

            const response = await fetch(url)
            const result = await response.json()

            setImages(result.hits)

            const totalPagesToShow = Math.ceil(result.totalHits/imgPerPage)
            setTotalPages(totalPagesToShow)

            //Move the screen up
            const jumbotron = document.querySelector('.jumbotron')
            jumbotron.scrollIntoView({ behavior: 'smooth'})
            
        }

        searchApi()

    }, [search, currentPages])

    const beforePage = () => {
        const pageToShow = currentPages-1
        if(pageToShow < 1){
            setCurrentPages(1)
        } else {
            setCurrentPages(pageToShow)
        }
    }

    const nextPages = () => {
        const pageToShow = currentPages + 1
        if(pageToShow > totalPages){
            setCurrentPages(totalPages)
        } else {
            setCurrentPages(pageToShow)
        }

    }

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Search Images</p>
                <Form
                    setSearch={setSearch}
                />
            </div>
            <div className="row justify-content-center">
                <ImgList
                    images={images}
                />
                {
                    currentPages !== 1 && (
                        <button
                            type="button"
                            className="bbtn btn-info mr-1"
                            onClick={beforePage}
                        >
                            Before &laquo;
                        </button>
                    )
                }
                {
                    currentPages !== totalPages && (
                        <button
                            type="button"
                            className="bbtn btn-info"
                            onClick={nextPages}
                        >
                            Next &raquo;
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default App
