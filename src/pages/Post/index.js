import React, { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'

// export default function Post() {
//   const params = useParams()
//   const { search } = useLocation()
//   const queryParams = useMemo(() => new URLSearchParams(search), [search])

//   console.log(params)
//   console.log(queryParams.get('search'))

//   return <h1>Post</h1>
// }

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location
    this.queryParams = new URLSearchParams(search)
  }

  handleNavigate = () => {
    this.props.history.push('/')
  }

  render() {
    console.log(this.queryParams.get('search'))

    return (
      <>
        <h1>Post Page</h1>
        <button onClick={this.handleNavigate}>Voltar para a home</button>
      </>
    )
  }
}