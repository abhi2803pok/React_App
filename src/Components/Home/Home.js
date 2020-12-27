import React from 'react'
import { userConsumer } from '../../userContext'

export default function Home() {
    return (
        <div>
            hd
            <userConsumer>{
                (username)=>{
                    return <div> Hello {username} </div>
                    
                }
                
                
            }
            </userConsumer>
            
        </div>
    )
}
