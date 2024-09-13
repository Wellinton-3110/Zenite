import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Button } from "./button/Button";
import { useTranslation } from "react-i18next";
import VideoPlayer from "./VideoPlayer";
import SliderImg from "../img/SliderImg.jpg";
import "keen-slider/keen-slider.min.css";
import "../css/style.css";

export function BodySlider({ bodySliderRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const { t } = useTranslation();

  return (
    <>
      <div ref={bodySliderRef} className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider absolute left-0 w-[100vw] h-[85vh] --Responsive--> sm:h-[42vh]"
        >
          <div className="keen-slider__slide number-slide1 absolute left-0">
            <div className="w-[85%] h-[87%] absolute left-[8vw] top-10 --Responsive--> sm:w-[100%] sm:h-[100%] sm:left-0 sm:scale-125 object-contain ">
              <h1
                id="bodySliderH1"
                className="SUSE absolute left-[50%] top-[13%] w-[950px] h-[250px] translate-x-[-50%] text-[45px] text-center [line-height:65px] font-medium --responsive--> md:text-[35px] md:[line-height:55px] sm:text-[17px] sm:[line-height:25px] sm:w-[290px] sm:font-medium sm:top-[10%]"
              >
                {t("BODYSLIDER_H1_PT")}
              </h1>
              <img
                src={SliderImg}
                alt="Slider Imagem"
                className="w-[100%] h-[100%]"
              />
            </div>
            <Button
              link="https://www.future-motion.eu/pt/conceito-future"
              text="text-[white]"
              background="bg-[#00AEAD]"
              positionX="left-[50%]"
              positionY="top-[59%]"
              translateX="translate-x-[-50%]"
              translateY="translate-y-[-20%]"
              smTranslateY="sm:top-[75%]"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="w-[100vw] h-[80%] absolute left-[0] --Responsive--> sm:w-[100%] sm:h-[100%] sm:left-0">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
