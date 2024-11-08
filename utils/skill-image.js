import bootstrap from "/public/svg/skills/bootstrap.svg";
import canva from "/public/svg/skills/canva.svg";
import css from "/public/svg/skills/css.svg";
import fastify from "/public/svg/skills/fastify.svg";
import figma from "/public/svg/skills/figma.svg";
import firebase from "/public/svg/skills/firebase.svg";
import gimp from "/public/svg/skills/gimp.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import lightroom from "/public/svg/skills/lightroom.svg";
import materialui from "/public/svg/skills/materialui.svg";
import microsoftoffice from "/public/svg/skills/microsoftoffice.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import photoshop from "/public/svg/skills/photoshop.svg";
import picsart from "/public/svg/skills/picsart.svg";
import react from "/public/svg/skills/react.svg";
import sketch from "/public/svg/skills/sketch.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import wordpress from "/public/svg/skills/wordpress.svg";
import native from '/public/svg/skills/reactnative.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import express from '/public/svg/skills/expressjs.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "node js":
      return nodejs;
    case "native":
      return native;
    case "express":
      return express;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "wordpress":
      return wordpress;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "canva":
      return canva;
    default:
      break;
  }
};
