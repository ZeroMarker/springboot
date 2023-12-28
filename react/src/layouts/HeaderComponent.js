import React from 'react'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="www.baidu.com">Management Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">产品管理</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/customers" className="nav-link">客户管理</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/employees" className="nav-link">员工管理</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
            </div>

    )
}

export default HeaderComponent
