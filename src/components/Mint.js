import React from "react";
import { connect } from "../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import ApeClub from "./ApeClub";
function Mint(){
  const dispatch = useDispatch();
    return(
        <div id="Mint">
            <div className="mint-container">
                <div className=" row ">
                    <div className="col-md-6 col-sm-12 info-col">
                        <div className="logo-container mt-5">
                            <h1 className="text-center mx-auto">WₐGGₒ</h1>
                        </div>
                        <p className="text-center font-2">
                            ᵂᵉ ᵃʳᵉ ᵃˡˡ ᵍᵒⁱⁿᵍ ᵗᵒ ᵇᵉᶜᵒᵐᵉ ᵍᵒᵇˡⁱⁿˢ
                        </p>
                        <div className="row image-group mx-auto">
                            <div className="col-4 mt-3">
                               <img src="images/23.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/27.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/307.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/310.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/313.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/318.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/322.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/327.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                            <div className="col-4 mt-3">
                               <img src="images/29.png" alt=" " className="img-fluid mint-image"/> 
                            </div>
                        </div>
                        <p className="font-3 text-center mt-4">
                            Wₑ ₐᵣₑ ₐₗₗ gₒᵢₙg ₜₒ bₑcₒₘₑ gₒbₗᵢₙₛᵀʰᵉʳᵉ ⁱˢ ᴺᴼ ᴹᴬᴾ
                        </p>
                        <p className="font-4 text-center">
                            Nₒ ᵣₒadₘaₚ dₒₑₛₙ'ₜ ₘₑaₙ ₜₕₑᵣₑ aᵣₑ ₙₒ ₚₗaₙₛ.
                        </p>
                        <div className="social-container d-flex justify-content-center align-items-center">
                            <a className="social-icon me-3" href="https://twitter.com/moontigers_xyz?s=21&t=iJsr2FNdgZwOEqbWLtv3XQ"><img src="images/opensea1.png" alt=" " className="img-fluid"/></a>
                            <a className="social-icon me-3" href="https://twitter.com/moontigers_xyz?s=21&t=iJsr2FNdgZwOEqbWLtv3XQ"><img src="images/twitter.png" alt=" " className="img-fluid"/></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 connect-col d-flex justify-content-center align-items-center">
                          {/* <button className="connect-btn" >Mint Coming Soon..</button>  */}
                           <ApeClub/>  
                    <div>
                   
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Mint;