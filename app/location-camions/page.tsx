"use client";

import React from "react"
import Header1 from "./components/header1";
import { GridPatternDashed } from "./components/gridpatterndashed";
import CamionsProducts from "./components/camions-products";
import Faq from "../../components/ui/faq-section";


export default function LocationCamion(){
    return(
        <div>
            <Header1/>
            <GridPatternDashed/>
            <CamionsProducts/>
            <Faq/>
        </div>
    )
}