import React, {Component} from 'react';
import './contact_styl.css';
import Contact from './UI';

class Contacts extends Component{
    render(){
        return(
            //lefthand side of the web page
            <div className="justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Contact title="Contact" intro = "Looking forward to hearing from you"/>
                    </div>

                    <div className = "col-md-4">
                        <Contact phone="Phone" phoneNumber = "123-456-7890"/>
                    </div>

                    <div className = "col-md-4">
                        <Contact email="Email" emailAddress = "info@mysite.com"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contacts;