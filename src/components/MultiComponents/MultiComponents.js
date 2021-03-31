import React from 'react'
import Available from './Available/Available'
import WhyChoose from './Available/WhyChoose'
import CallNow from './ClientSay/CallNow'
// import ClientSay from './ClientSay/ClientSay'

function MultiComponents() {
    return (
        <div>
            <Available />
            {/* <ClientSay /> <br/> */}
            <WhyChoose /> <br/>
            <CallNow /> <br/>  
        </div>
    )
}

export default MultiComponents
