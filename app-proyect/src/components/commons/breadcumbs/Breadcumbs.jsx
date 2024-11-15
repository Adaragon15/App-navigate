import React from 'react'

export const Breadcumbs = () => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    {/* Title section */}
                    <div className="col-sm-6">
                        <h1 className="m-0">Dashboard v3</h1>
                    </div>

                    {/* Breadcumbs section */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard v3</li>
                        </ol>
                    </div>
                </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>


    )
}