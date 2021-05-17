import React,{useState} from "react";
import {
    AirdropContainer,
    AirdropBg,
    ImgBg,
    AirdropContent,
    AirdropCol,
    AirdropTokenImg,
    AirdropH1
} from "./AirdropElements"

import airdrop from "../../images/airdrop.jpg"
import token from "../../images/token1.png"
import {Button} from "../ButtonElements"
import Dialog from "../Dialog"

const AirdropSection =({id,t})=>{

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <AirdropContainer id={id}>
            <AirdropBg>
                <ImgBg src={airdrop} alt="airdrop"></ImgBg>
            </AirdropBg>

            <AirdropContent>
                <AirdropCol>
                    <AirdropTokenImg src={token}></AirdropTokenImg>
                    <div data-aos="fade-in">
                        <AirdropH1>{t("airdropTitle")}</AirdropH1>
                        <Button onClick={handleClickOpen}>{t("rulesButton")}</Button>
                        <Dialog open={open} c={handleClose} t={t}></Dialog>
                    </div>
                </AirdropCol>
            </AirdropContent>

        </AirdropContainer>

    )

}

export default AirdropSection