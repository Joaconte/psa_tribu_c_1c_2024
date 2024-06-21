import { Project } from "@/types/types";
import React, { useState } from "react";

import {OptionsList, InputText, TextArea, InputDate} from "@/components/editLayerComponents" 
import { ApplyButton, BackButton} from "@/components/buttons"
import { useNavigate } from "react-router-dom";

function getEnumValueFromString(enumObj: any, str: string): number | undefined {
    return enumObj[str as keyof typeof enumObj];
  }

  function send() {}


  function handleSubmit() {
}