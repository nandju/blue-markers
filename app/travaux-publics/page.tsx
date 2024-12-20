"use client";

import React from "react"
import { GridPatternDashed } from "./components/gridpatterndashed";
import Faq from "../../components/ui/faq-section";
import Header1 from "./components/header1";
import PublicsWork from "./components/publics-work";

export default function TravauxPublics(){
    return(
        <div>
            <Header1/>
            <GridPatternDashed/>
            <PublicsWork/>
            <Faq/>
        </div>
    )
}