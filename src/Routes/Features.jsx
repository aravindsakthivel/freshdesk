import React from "react";
import { Link, Route } from "react-router-dom";
import styled from 'styled-components'
import DropDown from '../Components/NavbarComponents/DropDown'
import {Ticketing} from '../Components/FeaturesComponent/Ticketing'
import {Collaboration} from '../Components/FeaturesComponent/Collaboration'
import {Automations} from '../Components/FeaturesComponent/Automations'
import {HelpWidget} from '../Components/FeaturesComponent/HelpWidget'
import {ReportingAnalytics} from '../Components/FeaturesComponent/ReportingAnalytics'
import {Security} from '../Components/FeaturesComponent/Security'
import {NewFeatures} from '../Components/FeaturesComponent/NewFeatures'
import {AllFeatures} from '../Components/FeaturesComponent/AllFeatures'
import { v4 as uuidv4 } from 'uuid'

const FeaturesWrapper = styled.div`
	a{
		margin-top:8px;
		margin-bottom:8px;
	}
`

const links= [
		{
		title:"Ticketing",
		to:"/features/ticketing"      
		},
	{
		title:"Collaboration",
		to:"/features/collaboration"    
		},
		{
		title:"Automations",
		to:"/features/automations"    
	},
	{
		title:"Help widget",
		to:"/features/help-widget"
	},
	{
		title:"Reporting &amp; Analytics",
		to:"/features/reporting-analytics"
	},
	{
		title:"Security",
		to:"/features/security"    
		},
		{
		title:"New Features",
		to:"/features/new-features"    
		},
		{
		title:"All Features",
		to:"/features/all-features"    
		}
]



export const Features = () => {
		return(
				<>
						<FeaturesWrapper>
								<DropDown key = {uuidv4()}>
										{links.map(({title, to}) => (
												<Link key = {to} to = {to}>{title}</Link>
										))}
								</DropDown>
						</FeaturesWrapper>
						<div>
								<Route path="/features/ticketing" render={() => <Ticketing key = {uuidv4()} />} />
								<Route path="/features/collaboration" render={() => <Collaboration key = {uuidv4()} />} />
								<Route path="/features/automations" render={() => <Automations key = {uuidv4()} />} />
								<Route path="/features/help-widget" render={() => <HelpWidget key = {uuidv4()} />} />
								<Route path="/features/reporting-analytics" render={() => <ReportingAnalytics key = {uuidv4()} />} />
								<Route path="/features/security" render={() => <Security key = {uuidv4()} />} />
								<Route path="/features/new-features" render={() => <NewFeatures key = {uuidv4()} />} />
								<Route path="/features/all-features" render={() => <AllFeatures key = {uuidv4()} />} />
						</div>
				</>
				
		)
		
}

// Ticketing
// Collaboration
// Automations
// Help widget
// Reporting &amp; Analytics
// Security
// New Features
// All Features
