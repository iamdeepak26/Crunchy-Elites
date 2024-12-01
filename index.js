import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}

export default index
var sidenav = document.getElementById("sidenavbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

export default index
