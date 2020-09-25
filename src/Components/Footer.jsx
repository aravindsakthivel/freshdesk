import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'



const FooterWrapper = styled.div`
    position:relative;
    left: 0;
    bottom:-300px;
    width: 100%;
    background-color: whitesmoke; 
    padding:5px;
    display:flex;
    justify-content:space-between;
`

const FreshWorks = styled.div`

`


const Company = styled.div`

`

const FreshDesk = styled.div`

`

const TopFeatures = styled.div`
    display:flex;
    flex-direction:column;
    >a{
        margin-top:8px;
        margin-bottom:8px;
    }
`

const Solutions = styled.div`
    display:flex;
    flex-direction:column;
    >a{
        margin-top:8px;
        margin-bottom:8px;
    }
`

const Other = styled.div`

`

const linksTopFeature= [
    {
		title:"Ticketing",
		to:"/features/ticketing"      
    },
	{
		title:"Collaboration",
		to:"/features/collaboration"    
    },
    {
		title:"Omnichannel",
		to:"/solutions/omni-channel"    
	},
    {
		title:"Automations",
		to:"/features/automations"    
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
		title:"Reporting &amp; Analytics",
		to:"/features/reporting-analytics"
	},
	{
		title:"HelpDesk",
		to:"/features/help-widget"
	},
	{
		title:"Secure helpdesk",
		to:"/features/security"    
    },
    {
		title:"Remote Support",
		to:"/resources/remote-support"      
    }
]


const linksSolutions= [
	{
		title:"Enterprise",
		to:"/solutions/enterprise"      
	},
	{
		title:"SMB",
		to:"/solutions/smb"    
	},
	{
		title:"E-Commerce",
		to:"/solutions/retail-e-commerce"
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




export const Footer = () => {
    return(
        <FooterWrapper>
            <FreshWorks> 
                <p>FreshWorks</p>
                <p>FreshDesk</p>
                <p>FreshService</p>
                <p>Freshsales</p>
                <p>Freshcaller</p>
                <p>Freshchat</p>
                <p>FreshTeam</p>
                <p>Freshmarketer</p>
                <p>FreshPing</p>
                <p>Freshrelease</p>
                <p>Freshstatus</p>
                <p>Freshsuccess</p>
            </FreshWorks>
            <Company> 
                <p>About</p>
                <p>Leadership</p>
                <p>Board of directors</p>
                <p>Investors</p>
                <p>Affiliates</p>
                <p>Partners</p>
                <p>Careers</p>
                <p>Newsroom</p>
                <p>Contact us</p>
            </Company>
            <FreshDesk> 
                <p>Features</p>
                <p>Pricing</p>
                <p>Apps</p>
                <p>Customers</p>
                <p>API & Developers</p>
                <p>Rsources</p>
                <p>Blog</p>
                <p>Free Ticketing system</p>
                <p>Customer Portal system</p>
                <p>Field service management</p>
                <p>Software</p>
            </FreshDesk>
            <TopFeatures> 
                    {linksTopFeature.map(({title, to}) => (
                        <Link key = {to} to = {to}>{title}</Link>
                    ))}
            </TopFeatures>
            <Solutions> 
                    {linksSolutions.map(({title, to}) => (
                        <Link key = {to} to = {to}>{title}</Link>
                    ))}
            </Solutions>
            <Other> 

            </Other>
        </FooterWrapper>
    )
}