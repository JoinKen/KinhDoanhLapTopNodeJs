
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      // Link to = "/Process" > <button className="navagation btn btn-success voca-style btn-navigation">MY PROCESS</button></Link >
      <header className="header">
        {/* Top Bar */}
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="main_nav_content d-flex flex-row">
                  {/* Categories Menu */}
                  <div className="cat_menu_container">
                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div className="cat_burger"><span /><span /><span /></div>
                      <div className="cat_menu_text">categories</div>
                    </div>

                  </div>
                  {/* Main Nav Menu */}
                  <div className="main_nav_menu ml-auto">
                    <ul className="standard_dropdown main_nav_dropdown">
                      <li><a href="#">Home<i className="fas fa-chevron-down" /></a></li>
                      <li className="hassubs">
                        <a href="#">Super Deals<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Featured Brands<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Pages<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li><a href="shop.html">Shop<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="product.html">Product<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="cart.html">Cart<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                      <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                    </ul>
                  </div>
                  {/* Menu Trigger */}
                  <div className="menu_trigger_container ml-auto">
                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div className="menu_burger">
                        <div className="menu_trigger_text">menu</div>
                        <div className="cat_burger menu_burger_inner">
                          <span /><span /><span /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Menu */}
      </header>
    )
  }
}
export default Navigation;

