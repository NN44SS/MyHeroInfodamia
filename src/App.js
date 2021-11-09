import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import HeroSection from "./Heros/HeroSection";
import StudentSection from "./Students/StudentSection";
import VillainSection from "./Villains/VillainSection";

function App() {
  const [villians, setVillains] = useState([]);
  const [students, setStudents] = useState([]);
  const [heros, setHeros] = useState([]);

  //API fetch to get the array of Villains
  const fetchVillainHandler = useCallback(async () => {
    var currentPage = 1;
    var maxPage = 0;
    const charListArray = [];

    do {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?affiliation=League of Villains&page=${currentPage}`
      );

      const characterList = await response.json();

      for (const key in characterList.result) {
        var imgShort = characterList.result[key].images.length - 1;

        charListArray.push({
          id: key,
          name: characterList.result[key].name,
          img: characterList.result[key].images[imgShort],
          affiliation: characterList.result[key].affiliation,
          birthday: characterList.result[key].birthday,
          description: characterList.result[key].description,
          occupation: characterList.result[key].occupation,
          quirk: characterList.result[key].quirk,
        });
      }

      maxPage = characterList.info.pages;
      currentPage++;
    } while (currentPage <= maxPage);

    setVillains(charListArray);
  }, []);

  //API fetch to get the array of students
  const fetchStudentHandler = useCallback(async () => {
    var currentPage = 1;
    var maxPage = 0;
    const charListArray = [];

    do {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?occupation=Student&page=${currentPage}`
      );

      const characterList = await response.json();

      for (const key in characterList.result) {
        var imgShort = characterList.result[key].images.length - 1;

        charListArray.push({
          id: key,
          name: characterList.result[key].name,
          img: characterList.result[key].images[imgShort],
          affiliation: characterList.result[key].affiliation,
          birthday: characterList.result[key].birthday,
          description: characterList.result[key].description,
          occupation: characterList.result[key].occupation,
          quirk: characterList.result[key].quirk,
        });
      }

      maxPage = characterList.info.pages;
      currentPage++;
    } while (currentPage <= maxPage);

    setStudents(charListArray);
  }, []);

  //API fetch to get the array of students
  const fetchHeroHandler = useCallback(async () => {
    var currentPage = 1;
    var maxPage = 0;
    const charListArray = [];

    do {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?occupation=Pro Hero&page=${currentPage}`
      );

      const characterList = await response.json();

      for (const key in characterList.result) {
        var imgShort = characterList.result[key].images.length - 1;

        charListArray.push({
          id: key,
          name: characterList.result[key].name,
          alias: characterList.result[key].alias,
          img: characterList.result[key].images[imgShort],
          affiliation: characterList.result[key].affiliation,
          birthday: characterList.result[key].birthday,
          description: characterList.result[key].description,
          occupation: characterList.result[key].occupation,
          quirk: characterList.result[key].quirk,
        });
      }

      maxPage = characterList.info.pages;
      currentPage++;
    } while (currentPage <= maxPage);

    setHeros(charListArray);
  }, []);

  useEffect(() => {
    fetchVillainHandler();
    fetchHeroHandler();
    fetchStudentHandler();
  }, [fetchVillainHandler, fetchHeroHandler, fetchStudentHandler]);

  return (
    <div className="App">
      <Header />
      <StudentSection studentList={students} />
      <HeroSection heroList={heros} />
      <VillainSection villainList={villians} />
      <Footer />
    </div>
  );
}

export default App;
