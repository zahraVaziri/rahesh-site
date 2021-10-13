import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
const Product = (props) => {
const data = props.data

         
    return(
        <>
        {ResponsiveEllipsis} 
           <div class="card">
                <img src= {data.pic} class="card-img-top" alt="..." width={'100%'}/>
                    <div class="card-body">
                        <Link  to={'/detail/'+ data.id}>
                        
                            <LinesEllipsis
                                text={data.title}
                                maxLine='1'
                                ellipsis='...'
                                basedOn='letters'
                                component='h4'
                            />
                                        
                        </Link>
                                <span class="cat-nb">پژوهش</span>
                                <span class="date-nb">02 ژوئن 2021</span>
                                <p class="line3-ell">
                                    <HTMLEllipsis
                                        unsafeHTML={data.text}
                                        maxLine='3'
                                        ellipsis='...'
                                        basedOn='letters'
                                    />
                                </p>
                            </div>
                            </div> 
                            
            
        </>
    )
    
}

export default Product