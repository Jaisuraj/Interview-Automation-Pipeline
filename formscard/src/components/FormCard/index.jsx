import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Forms_icon from "../../assets/images/Forms_icon.png";
import { FormDetails } from "./formDetails";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #3E48CB;
  border-radius: 50%;
`;
//#fbbe01
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const TitleText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 30px;
  font-weight: 900;
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 0.1em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function FormCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <DetailWrapper>
            <Detail
              style={{ x, y, rotateX, rotateY, rotate: "-5deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={Forms_icon}/>
            </Detail>
          </DetailWrapper>
          <TitleText>Recruitment Form</TitleText>
        </TopContainer>
        <BottomContainer>
          <FormDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
