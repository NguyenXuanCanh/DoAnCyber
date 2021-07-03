import React from 'react'

export default function FilterTool() {
    return (
        <section className="home__tool">
            <div className="container">
                <div className="row tool">
                    <div className="dropdown show col-md-4 tool__item first__item">
                        <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tom & Jerry
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="col-md-2 tool__item dropdown show">
                        <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Rạp
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="col-md-2 tool__item dropdown show">
                        <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ngày xem
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="col-md-2 tool__item dropdown show">
                        <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Xuất chiếu
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="col-md-2 tool__item dropdown show btn__muave last__item">
                        <button className="btn btn-secondary">
                            Mua vé ngay
        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
