"use client";

import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "/public/logo.png";
// import Link from "next/link";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

export default function Header() {
  // бургер меню
  const isMaxWidth1439 = useMediaQuery("(max-width: 1439px)");
  const isMaxWidth767 = useMediaQuery("(max-width: 767px)");

  const [isOpen, setIsOpen] = useState(false);

  // цепляем header за верх
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1439px)");

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // узнаём на какой section смотрит пользователь
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let closestSectionId = "";
    let closestSectionTop = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.top < window.innerHeight) {
        if (Math.abs(rect.top) < closestSectionTop) {
          closestSectionTop = Math.abs(rect.top);
          closestSectionId = section.id;
        }
      }
    });

    if (closestSectionId) {
      setActiveSection(closestSectionId);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Прокрутка до определённой section
  const headerHeight = 60;

  const scrollToSection = (event, id) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции
      window.scrollTo({
        top: sectionTop - headerHeight, // Учитываем высоту заголовка
        behavior: "smooth", // Плавная прокрутка
      });
    }
  };

  return (
    <header
      style={{
        paddingTop: isMaxWidth767
          ? "0px"
          : isMaxWidth1439
          ? "16px"
          : isSticky
          ? "0px"
          : "32px",
        boxShadow: isSticky ? "0px 5px 5px rgba(164, 173, 172, 0.25)" : "",
      }}
      className={styles.header}
    >
      <div className={styles.section}>
        <div className={styles.content}>
          <Image className={styles.logo} src={logo} alt="Logo"></Image>
          <ul
            className={`${styles.wrapper} ${
              isOpen ? styles.rightTrue : styles.rightFalse
            }`}
          >
            <li
              onClick={(event) => scrollToSection(event, "section2")}
              className={`${styles.button} ${
                activeSection === "section2" ? styles.active : ""
              }`}
            >
              <a href="/">Преимущества</a>
            </li>
            <li
              onClick={(event) => scrollToSection(event, "section4")}
              className={`${styles.button} ${
                activeSection === "section4" ? styles.active : ""
              }`}
            >
              <a href="/">Как работаем</a>
            </li>
          </ul>
          {isMobile && (
            <button
              className={`${styles.burger} ${
                isOpen ? styles.active : styles.noActive
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
