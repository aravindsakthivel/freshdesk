import React from "react";
import { Link, Route } from "react-router-dom";
import styled from 'styled-components'
import DropDown from '../Components/NavbarComponents/DropDown'
import {Enterprise} from '../Components/SolutionsComponents/Enterprise'
import {SMB} from '../Components/SolutionsComponents/SMB'
import {Omnichannel} from '../Components/SolutionsComponents/OmniChannel'
import {AI} from '../Components/SolutionsComponents/AI'
import {SelfService} from '../Components/SolutionsComponents/SelfService'
import {FieldService} from '../Components/SolutionsComponents/FieldService'
import {RemoteCustomerService} from '../Components/SolutionsComponents/RemoteCustomerService'
import {ProActiveCustomerSupport} from '../Components/SolutionsComponents/ProactiveCustomerSupport'
import {RetailECommerce} from '../Components/SolutionsComponents/RetailE-commerce'
import {TravelHospitality} from '../Components/SolutionsComponents/TravelHospitality'
import {SoftwareIT} from '../Components/SolutionsComponents/SoftwareIT'
import {OnlineFirst} from '../Components/SolutionsComponents/OnlineFirst'
import {Manufacturing} from '../Components/SolutionsComponents/Manufacturing'
import {HealthCare} from '../Components/SolutionsComponents/HealthCare'
import {Education} from '../Components/SolutionsComponents/Education'
import { v4 as uuidv4 } from 'uuid'


const SolutionsWrapper = styled.div`
	a{
		margin-top:8px;
		margin-bottom:8px;
	}
`


const links= [
	{
		title:"Enterprise",
		to:"/solutions/enterprise"      
	},
	{
		title:"SMB",
		to:"/solutions/smb"    
	},
	{
		title:"Omnichannel",
		to:"/solutions/omni-channel"    
	},
	{
		title:"AI",
		to:"/solutions/ai"
	},
	{
		title:"Self Service",
		to:"/solutions/self-service"
	},
	{
		title:"Field Service",
		to:"/solutions/field-service"
	},
	{
		title:"Remote Customer Service",
		to:"/solutions/remote-customer-service"
	},
	{
		title:"ProActive Customer Support",
		to:"/solutions/proactive-customer-service"
	},
	{
		title:"Retail E-Commerce",
		to:"/solutions/retail-e-commerce"
	},
	{
		title:"Travel Hospitality",
		to:"/solutions/travel-hospitality"
	},
	{
		title:"Software IT",
		to:"/solutions/software-it"
	},
	{
		title:"Online First",
		to:"/solutions/online-first"
	},
	{
		title:"Manufacturing",
		to:"/solutions/manufacturing"
	},
	{
		title:"Healthcare",
		to:"/solutions/healthcare"
	},
	{
		title:"Education",
		to:"/solutions/education"
	}
]



export const Solutions = () => {
	return(
		<>
			<SolutionsWrapper>
				<DropDown key = {uuidv4()}>
					{links.map(({title, to}) => (
						<Link key = {to} to = {to}>{title}</Link>
					))}
				</DropDown>
			</SolutionsWrapper>
			<div>
				<Route path="/solutions/enterprise" render={() => <Enterprise key = {uuidv4()} />} />
				<Route path="/solutions/smb" render={() => <SMB key = {uuidv4()} />} />
				<Route path="/solutions/omni-channel" render={() => <Omnichannel key = {uuidv4()} />} />
				<Route path="/solutions/ai" render={() => <AI key = {uuidv4()} />} />
				<Route path="/solutions/self-service" render={() => <SelfService key = {uuidv4()} />} />
				<Route path="/solutions/field-service" render={() => <FieldService key = {uuidv4()} />} />
				<Route path="/solutions/remote-customer-service" render={() => <RemoteCustomerService key = {uuidv4()} />} />
				<Route path="/solutions/proactive-customer-service" render={() => <ProActiveCustomerSupport key = {uuidv4()} />} />
				<Route path="/solutions/retail-e-commerce" render={() => <RetailECommerce key = {uuidv4()} />} />
				<Route path="/solutions/travel-hospitality" render={() => <TravelHospitality key = {uuidv4()} />} />
				<Route path="/solutions/software-it" render={() => <SoftwareIT key = {uuidv4()} />} />
				<Route path="/solutions/online-first" render={() => <OnlineFirst key = {uuidv4()} />} />
				<Route path="/solutions/manufacturing" render={() => <Manufacturing key = {uuidv4()} />} />
				<Route path="/solutions/healthcare" render={() => <HealthCare key = {uuidv4()} />} />
				<Route path="/solutions/education" render={() => <Education key = {uuidv4()} />} />
			</div>
		</>
	)
}