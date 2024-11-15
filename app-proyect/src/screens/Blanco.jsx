//react
import React from 'react';

//layouts
import { Navbar, AsideBar, Breadcumbs, Footer } from '../components';

const Blanco = () => {
  return (
    <div className="">
      <Navbar />
      <AsideBar />

      <div className="content-wrapper" style={{ minHeight: '1604.44px' }}>
        {/* Content Header (Page header) */}
        <Breadcumbs />
        {/* ./content-header */}

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
            </div>
            <div className="card-footer">
              Footer
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Blanco;