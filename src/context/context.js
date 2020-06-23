import React, { Component } from 'react';
import { linkData } from './linkData';
import { serviceData } from './serviceData';
import { projectData } from './projectData';
import {Technologies, Language, Industry } from './skillData';
import { socialData } from './socialData';

const DataContext = React.createContext();

class DataProvider extends Component {
    state = {
        links: linkData,
        projects: projectData,
        services: serviceData,
        technologies: Technologies,
        social: socialData,
        language: Language,
        industry: Industry
    };

    render() {
        return (
            <DataContext.Provider value={{
                ...this.state,
            }} >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

const DataConsumer = DataContext.Consumer;

export { DataConsumer, DataProvider };