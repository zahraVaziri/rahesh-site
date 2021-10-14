import React from "react";
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import {Link} from "react-router-dom";
const LinesEllipsisRes = responsiveHOC()(LinesEllipsis);
const HTMLEllipsisRes = responsiveHOC()(HTMLEllipsis);

const Product = (props) => {
    const data = props.data;

    return (
        <>
            <div className="card">
                <img src={data.pic} className="card-img-top" alt="..." width={'100%'}/>
                <div className="card-body">
                    <Link to={'/detail/' + data.id}>

                        <LinesEllipsisRes
                            text={data.title}
                            maxLine='1'
                            ellipsis='...'
                            basedOn='letters'
                            component='h4'
                        />

                    </Link>
                    <span className="cat-nb">پژوهش</span>
                    <span className="date-nb">02 ژوئن 2021</span>
                    <p className="line3-ell">
                        <HTMLEllipsisRes
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