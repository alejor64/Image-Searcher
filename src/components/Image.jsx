import React from 'react'
import PropTypes from 'prop-types'

const Image = ({img}) => {

    const { largeImageURL, likes, previewURL, tags, views, user } = img

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <div className="card-header">
                    <strong>Made By: </strong>  {user}
                </div>
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Views</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_black"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >HD Image
                    </a>
                </div>
            </div>
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.object.isRequired
}

export default Image
