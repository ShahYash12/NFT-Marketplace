import React from "react";

function Team() {
    return (
        <div id="Team">
            <div className="container">
                <h3 style={{color:"#E0FF65"}} className="text-center">MEET OUR TEAM</h3>
                <p className="team-subheading">
                    Our team began as five friends who wanted to create some dope Goats,
                    test our coding skills, and see how ridiculous we could make something.
                </p>
                <div className="row container mx-auto">
                    <div className="col-md-3 team-card">
                        <img src="images/Skin-4.png" className="img-fluid" alt=""/>
                        <p className="mt-4 poppins-bold">Travis</p>
                        <p className="poppins-bold">Founder </p>
                        
                    </div>
                    <div className="col-md-3 team-card">
                        <img src="images/Skin-1.png" className="img-fluid" alt=""/>
                        <p className="mt-4 poppins-bold">KRISHIT</p>
                        <p className="poppins-bold">Main Developer</p>
                       
                    </div>
                    <div className="col-md-3 team-card">
                        <img src="images/Skin-9.png" className="img-fluid" alt=""/>
                        <p className="mt-4 poppins-bold">IT'S NS</p>
                        <p className="poppins-bold">Co-Founder</p>
                        
                    </div>
                    <div className="col-md-3 team-card">
                        <img src="images/Skin-5.png" className="img-fluid" alt=""/>
                        <p className="mt-4 poppins-bold">PHILIPS</p>
                        <p className="poppins-bold">Marketing Manager</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;