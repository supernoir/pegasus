import React from 'react'
import * as customApp from "./../config/sus_app_config.json"

export default class Main extends React.Component {
    render(){
        return (
            <div>
                <h1>{customApp && customApp.app.name}</h1>
                <h2>{customApp && customApp.app.description}</h2>
                <h3>{customApp && customApp.app.greeting}</h3>
            </div>
        )
    }
}