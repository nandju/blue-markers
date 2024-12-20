"use client"

import React from "react";
import Header1 from "./components/header1";
import ContactUsComponent from "./components/contact-us";
import Maps from "./components/maps";

export default function ContactUsPage(){
    return(
        <div>
            <Header1/>
            <ContactUsComponent/>
            <Maps/>
        </div>
    )
}