//react
import React from 'react'

export const Footer = () => {
    return (
        <footer className="main-footer color-surface color-on-surface" style={{ padding: '15px 20px', fontSize: '0.9rem' }}>
            <div className="d-flex justify-content-between align-items-center">
                {/* Copyright Section */}
                <div>
                    <strong className="color-primary-container color-on-primary-container" style={{ fontWeight: '600' }}>
                        Copyright © 2024
                        <a href="https://adminlte.io" className="color-primary" aria-label="MOBO Website"> MOBO</a>.
                    </strong>
                    <span className="ml-1">All rights reserved.</span>
                </div>

                {/* Version Info */}
                <div className="float-right">
                    <span className="color-secondary-container color-on-secondary-container" style={{ fontWeight: '500' }}>
                        <b>Version</b> 1.0.0
                    </span>
                </div>
            </div>
        </footer>
    )
}
