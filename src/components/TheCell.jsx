import React from 'react';
import { Link } from 'react-router-dom';

const contentContainer = {
  margin: '0 auto',
  padding: '0 1.2rem',
  maxWidth: '100rem'
};

const card = {
  width: '15em'
};

const cardContent = {
  textAlign: 'center',
  position: 'relative',
  padding: '10em 5em',
  transition: 'transform 3s',

  transformStyle: 'preserve-3d'
};

const TheCell = () => (
  <div className={contentContainer}>
    <div className={card}>
      <div className={cardContent}>
        <h1> Carbon 55 atoms </h1>
        <h1> Hydrogen 104 atoms </h1>
        <h1> Oxygen 6 atoms </h1>
      </div>
      <div>
        <hr />
        <ul>How does the body make fat?</ul>
      </div>
      <div>
        <hr />
        <ul> Fat or Sugar?</ul>
        <hr />
        <ul>
          One of the biggest misconceptions about fat, is that lost fat is
          literally burned off as energy. "What really happens is that all of
          the atoms in fat combine with oxygen atoms to form carbon dioxide
          (84%) and water (16%),". "Lots of energy is released by this process,
          but not one atom is destroyed or converted to energy."
        </ul>
        <hr />
        <ul>The Water is excreted through urine, feces, tears, and sweat.</ul>
        <hr />
        <ul>
          The Carbon dioxide is exhaled through your lungs, by breathing. Inhale
          oxygen and exhale carbon dioxide or fat.
        </ul>
        <ul>
          The human body contains two types of fat tissue: White fat is
          important in energy metabolism, heat insulation and mechanical
          cushioning. Brown fat is found mostly in newborn babies, between the
          shoulders, and is important for thermogenesis (making heat). Since
          adult humans have little to no brown fat, we'll concentrate on white
          fat in this article. See the bottom of this page for more on brown
          fat.
        </ul>
        <ul>Understanding macros.</ul>
        <ol>Carbohydrates</ol>
        <ol>Fat</ol>
        <ol>Protein</ol>

        <hr />
      </div>
    </div>

    <Link to="/fat">
      <button type="button">Back</button>
    </Link>
    <Link to="/calories">
      <button type="button">Calories</button>
    </Link>
  </div>
);

export default TheCell;
