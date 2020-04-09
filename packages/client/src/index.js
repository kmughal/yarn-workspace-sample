import React from "react"
import { render } from "react-dom"

const App = () => {
    const [data, setData] = React.useState(null)
    fetch("http://localhost:3333/data")
        .then(r => r.json())
        .then(x => {

            if (data == null) {
                setData(x.data)
            }
        })
    let markup = null

    if (data) {
        markup = data.map((d, i) => <div key={i}>{d.employee_name} is {d.employee_age} old.</div>)
    }
    return <>
        <div>{markup}</div>
    </>
}


render(<App />, document.getElementById("app"))