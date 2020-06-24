import React, { Component } from 'react';
import { linkData } from './linkData';
import { serviceData } from './serviceData';
import { projectData } from './projectData';
import {Technologies, Language, Industry } from './skillData';
import { socialData } from './socialData';
import { educationDat, findMeData, certificateData } from './educationData';

const DataContext = React.createContext();

class DataProvider extends Component {
    state = {
        links: linkData,
        projects: projectData,
        services: serviceData,
        technologies: Technologies,
        social: socialData,
        language: Language,
        industry: Industry,
        education: educationDat,
        findMe: findMeData,
        certificate: certificateData
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