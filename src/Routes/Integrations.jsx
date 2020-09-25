import React from "react";
import { Link, Route } from "react-router-dom";
import styled from 'styled-components'
import DropDown from '../Components/NavbarComponents/DropDown'
import {FreshSuccess} from '../Components/IntegrationComponent/FreshSuccess'
import {Slack} from '../Components/IntegrationComponent/Slack'
import {MicrosoftTeams} from '../Components/IntegrationComponent/MicrosoftTeams'
import {Whattsapp} from '../Components/IntegrationComponent/Whattsapp'
import {AllIntegration} from '../Components/IntegrationComponent/AllIntegration'
import { v4 as uuidv4 } from 'uuid'


const IntegrationWrapper = styled.div`
	a{
		margin-top:8px;
		margin-bottom:8px;
	}
`


const links= [
    {
		title:"FreshSuccess",
		to:"/integration/freshsuccess-integration"      
    },
	{
		title:"Slack",
		to:"/integration/slack-integration"    
    },
    {
		title:"MicrosoftTeams",
		to:"/integration/microsoftteams-integration"    
	},
	{
		title:"Whattsapp",
		to:"/integration/whattsapp-integration"
	},
	{
		title:"AllIntegration",
		to:"/integration/allintegration-integration"
	}
]



export const Integrations = () => {
    return(
        <>
            <IntegrationWrapper>
                <DropDown key = {uuidv4()}>
                    {links.map(({title, to}) => (
                        <Link key = {to} to = {to}>{title}</Link>
                    ))}
                </DropDown>
            </IntegrationWrapper>
            <div>
                <Route path="/integration/freshsuccess-integration" render={() => <FreshSuccess key = {uuidv4()} />} />
                <Route path="/integration/slack-integration" render={() => <Slack key = {uuidv4()} />} />
                <Route path="/integration/microsoftteams-integration" render={() => <MicrosoftTeams key = {uuidv4()} />} />
                <Route path="/integration/whattsapp-integration" render={() => <Whattsapp key = {uuidv4()} />} />
                <Route path="/integration/allintegration-integration" render={() => <AllIntegration key = {uuidv4()} />} />
            </div>
        </>
        
    )
    
}