import React from "react";
import { Link, Route } from "react-router-dom";
import styled from 'styled-components'
import DropDown from '../Components/NavbarComponents/DropDown'
import {RemoteSupport} from '../Components/ResourcesComponents/RemoteSupport'
import {CustomerStories} from '../Components/ResourcesComponents/CustomerStories'
import {ResourcesLibrary} from '../Components/ResourcesComponents/ResourcesLibrary'
import {Webinars} from '../Components/ResourcesComponents/Webinars'
import {Videos} from '../Components/ResourcesComponents/Videos'
import {FreeTools} from '../Components/ResourcesComponents/FreeTools'
import {Academy} from '../Components/ResourcesComponents/Academy'
import {Blog} from '../Components/ResourcesComponents/Blog'

import { v4 as uuidv4 } from 'uuid'


const ResourceWrapper = styled.div`
	a{
		margin-top:8px;
		margin-bottom:8px;
	}
`


const links= [
		{
		title:"Remote Support",
		to:"/resources/remote-support"      
		},
	{
		title:"Customer Stories",
		to:"/resources/customer-stories"    
		},
		{
		title:"Resources Library",
		to:"/resources/resources-library"    
	},
	{
		title:"Webinars",
		to:"/resources/webinars"
	},
	{
		title:"Videos",
		to:"/resources/videos"
		},
		{
		title:"FreeTools",
		to:"/resources/free-tools"
		},
		{
		title:"Academy",
		to:"/resources/academy"
		},
		{
		title:"Blog",
		to:"/resources/blog"
	}
]



export const Resources = () => {
		return(
				<>
						<ResourceWrapper>
								<DropDown key = {uuidv4()}>
										{links.map(({title, to}) => (
												<Link key = {to} to = {to}>{title}</Link>
										))}
								</DropDown>
						</ResourceWrapper>
						<div>
								<Route path="/resources/remote-support" render={() => <RemoteSupport key = {uuidv4()} />} />
								<Route path="/resources/customer-stories" render={() => <CustomerStories key = {uuidv4()} />} />
								<Route path="/resources/resources-library" render={() => <ResourcesLibrary key = {uuidv4()} />} />
								<Route path="/resources/webinars" render={() => <Webinars key = {uuidv4()} />} />
								<Route path="/resources/videos" render={() => <Videos key = {uuidv4()} />} />
								<Route path="/resources/free-tools" render={() => <FreeTools key = {uuidv4()} />} />
								<Route path="/resources/academy" render={() => <Academy key = {uuidv4()} />} />
								<Route path="/resources/blog" render={() => <Blog key = {uuidv4()} />} />
						</div>
				</>
				
		)
		
}