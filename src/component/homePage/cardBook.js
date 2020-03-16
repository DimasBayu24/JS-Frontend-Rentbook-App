import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';

import Axios from 'axios'



const URL_STRING = "/api/v1/sortbook/ok"


class CardBook extends Component {
  state = {
    library: []
  }

  getData = () => {
    Axios.get(URL_STRING)
      .then(({ data }) => {
        this.setState({
          library: data.result
        })
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {
    const { library } = this.state
    console.log("data from library state ", library)
    return (
      <div className="cardContainer">
        {library.length < 1 ?
          (
            <div>
              data kosong
            </div>
          ) :
          library.map(item => (
            <Link to={{ pathname: `/books/${item.id}`, book: item }}>
              <div className="cardWrapper" key={item.id}>
                <img className="cardImg" src={item.img} alt="" />
                <h1>{item.title}</h1>
                <p>
                  <Truncate
                    lines={2}
                    ellipsis={
                      <span>
                        ...{" "}
                        <span style={{ color: "gray", fontSize: "16px" }}>

                        </span>
                      </span>
                    }
                  >
                    {item.description}
                  </Truncate>
                </p>
              </div>
            </Link>
          ))}
      </div>
    )
  }
}

export default CardBook;