import React from 'react';
import "./RoadMap.css";
import {TiTick} from "react-icons/ti"
import {MdSchedule} from "react-icons/md"

const RoadMap = ({id, t, ln}) => {
  return (
    <div>
      <div className="container">
        <div className="textwrapper">
          <h2 className="heading">{t("roadMap")}</h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="center-line"></div>
      <div className="row row-1">
        <section>
          <TiTick className="icon" style={{color:"#079488"}}></TiTick>
          <div className="details">
            <span className="title">{t("roadMapTitle1")}</span>
          </div>
          <ul data-aos="fade-right">
            <li>{t("roadMapList11")}</li>
            <li>{t("roadMapList12")}</li>
            <li>{t("roadMapList13")}</li>
            <li>{t("roadMapList14")}</li>
          </ul>
        </section>
      </div>
      <div className="row row-2">
        <section>
          <MdSchedule className="icon" style={{color:"#0099ff"}}></MdSchedule>
          <div className="details">
            <span className="title">{t("roadMapTitle2")}</span>
          </div>
          <ul data-aos="fade-left">
            <li>{t("roadMapList21")}</li>
            <li>{t("roadMapList22")}</li>
            <li>{t("roadMapList23")}</li>
          </ul>
        </section>
      </div>

      <div className="row row-1">
        <section>
          <MdSchedule className="icon" style={{color:"#0099ff"}}></MdSchedule>
          <div className="details">
            <span className="title">{t("roadMapTitle3")}</span>
          </div>
          <ul data-aos="fade-right">
            <li>{t("roadMapList31")}</li>
            <li>{t("roadMapList32")}</li>
            <li>{t("roadMapList33")}</li>
            <li>{t("roadMapList34")}</li>
          </ul>
        </section>
      </div>

      <div className="row row-2">
        <section>
          <MdSchedule className="icon" style={{color:"#0099ff"}}></MdSchedule>
          <div className="details">
            <span className="title">{t("roadMapTitle4")}</span>
          </div>
          <ul data-aos="fade-left">
            <li>{t("roadMapList41")}</li>
            <li>{t("roadMapList42")}</li>
            <li>{t("roadMapList43")}</li>
            <li>{t("roadMapList44")}</li>
            <li>{t("roadMapList45")}</li>
          </ul>
        </section>
      </div>

      <div className="row row-1">
        <section>
          <MdSchedule className="icon" style={{color:"#0099ff"}}></MdSchedule>
          <div className="details">
            <span className="title">{t("roadMapTitle5")}</span>
          </div>
          <ul data-aos="fade-right">
            <li>{t("roadMapList51")}</li>
            <li>{t("roadMapList52")}</li>
          </ul>
        </section>
      </div>

      <div className="row row-2">
        <section>
          <MdSchedule className="icon" style={{color:"#0099ff"}}></MdSchedule>
          <div className="details">
            <span className="title">{t("roadMapTitle6")}</span>
          </div>
          <ul data-aos="fade-left">
            <li>{t("roadMapList61")}</li>
            <li>{t("roadMapList62")}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  )
}

export default RoadMap;



