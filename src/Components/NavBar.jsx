import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
// import {Features} from '../Routes/Features'
import {Features} from '../Routes/Features'
import {Solutions} from '../Routes/Solutions'
import {Resources} from '../Routes/Resources'
import {Integrations} from '../Routes/Integrations'

const LinkWrapper = styled.div`
	display:flex;
	justify-content:space-between;
	padding:10px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	> div:first-child{
		margin-top:10px;
	}
	> div:nth-child(2){
		display:flex;
		> * {
			padding:10px;
		}
	}
`

const DropDownBtn = styled.div`
	background-color: white;
	border:0;
	font-size:17px;
	>div:first-child{
		display: none;
	}
	>div:nth-child(2){
		position:absolute;
		top: 200px;
		left: 40px;
	}
	&:hover{
		text-decoration-line:underline;
		>div:first-child{
			display: block;
			position:absolute;
			background-color:#bdbdbd;
		}
	}
`


const links= [
    {
		title:"Home",
		to:"/"      
    },
	{
		title:"Features",
		to:"/features",
		dropDown:true,
		drop:<Features key = {uuidv4()}/>
    },
    {
		title:"Pricing",
		to:"/pricing",
		dropDown:false
	},
	{
		title:"Solutions",
		to:"/solutions",
		dropDown:true,
		drop:<Solutions key = {uuidv4()}/>
	},
	{
		title:"Resources",
		to:"/resources",
		dropDown:true,
		drop:<Resources key = {uuidv4()}/>
	},
	{
		title:"Integration",
		to:"/integration",
		dropDown:true ,
		drop:<Integrations key = {uuidv4()}/>
    },
    {
		title:"Login",
		to:"/login",
		dropDown:false  
    },
    {
		title:"Signup",
		to:"/signup",
		dropDown:false
    }
]


const NavBar = () => {
	return (
		<>
			<LinkWrapper>
				<div>
					<Link key = {links[0].to} to = {links[0].to}>{links[0].title}</Link>
				</div>
				<div>
					{links.map(({title,to, dropDown, drop}, index)=>(
						dropDown  ? 
							(<DropDownBtn key = {uuidv4()}>
								{title}
								{drop}
							</DropDownBtn>) 
								: 
							(index !== 0 ? ( <Link key = {to} to = {to}>{title}</Link>) : ("")) 
					))}
				</div>
			</LinkWrapper>
		</>
	)
}

export default NavBar