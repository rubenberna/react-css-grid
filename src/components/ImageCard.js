import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    // we need to wait for the image ref to load and then we pass another function as an argumnet
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10) // round to the next integer

    this.setState({ spans })
  }

  render() {
    const { description, urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={ this.imageRef }
          alt={ description }
          src={ urls.regular } />
      </div>
    )
  }
}

export default ImageCard
