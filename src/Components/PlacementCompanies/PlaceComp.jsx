import React from 'react'
import companyIcoSvg from "./placementCompanies";
import './placecomp-styles.css'

export default function PlaceComp() {
  return (
    <div className='comp-cont'>
    {companyIcoSvg.map((icoName) => { 
        console.log(icoName)
        return (
            <div>
                <img className='comp'
                    src={`images/compaines/${icoName}`}
                    alt="ico"
                ></img>
            </div>
        );
    })}
</div>
  )
}
