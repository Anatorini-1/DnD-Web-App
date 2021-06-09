import "./App.css";
import Login from "./components/Auth/Login";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import { useState, useEffect } from "react";
import Stats from "./components/Pages/Stats/Stats";
import Gear from "./components/Pages/Gear/Gear";
import Apperance from "./components/Pages/Apperance/Apperance";
import Features from "./components/Pages/Features/Features";
import Spells from "./components/Pages/Spells/Spells";
import Spell_Database from "./components/Pages/Spell Database/Spell Database";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ajax } from "jquery";

import DiceRoller from "./components/SharedComponents/DiceRoller";
import RawEdit from "./components/RawEdit/RawEdit";

if (process.env.NODE_ENV !== "production") {
  localStorage.setItem(
    "jsonPath",
    `https://srogiehacjendy.com/backend/json-data`
  );
  localStorage.setItem(
    "processingPath",
    `https://srogiehacjendy.com/backend/processing`
  );
  localStorage.setItem(
    "imgPath",
    `https://srogiehacjendy.com/public/img`
  );
  localStorage.setItem(
    "serverAddress",
    `https://srogiehacjendy.com`
  );
} else {
  localStorage.setItem(
    "jsonPath",
    `${window.location.protocol}//${window.location.host}/backend/json-data`
  );
  localStorage.setItem(
    "processingPath",
    `${window.location.protocol}//${window.location.host}/backend/processing`
  );
  localStorage.setItem(
    "imgPath",
    `${window.location.protocol}//${window.location.host}/public/img`
  );
  localStorage.setItem(
    "serverAddress",
    `${window.location.protocol}//${window.location.host}`
  );
}



function App() {
  let dateObj = new Date();
  const [logged, setLogged] = useState(false);
  const [view, setView] = useState("Stats");
  const [navOpen, setNavOpen] = useState(true);

  const [apperance, setApperance] = useState({});
  const [features, setFeatures] = useState({});
  const [gear, setGear] = useState({});
  const [stats, setStats] = useState({});
  const [spells, setSpells] = useState({});
  const [spellData, setSpellData] = useState({});
  const [mode, setMode] = useState(0);
  const setModeFunc = () => {
    setMode(!mode);
  };
  if (!logged) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpires");
  } else {
  }
  useEffect(() => {
    const fetchJSONData = async (file, saveFunc) => {
      ajax({
        url: `${window.location.protocol}//${localStorage.getItem("server")}/backend/processing/getJsonFile.php`,
        method: "post",
        dataType: "json",
        data: {
          token: localStorage.getItem("token"),
          field: file,
        },
        success: (res) => {
          /*console.log("1",res)*/ saveFunc(JSON.parse(res));
        },
        error: (res) => {
          console.log("ERROR", res); /*alert()*/
        },
      });
    };
    if (logged) {
      //console.log("fetching");
      fetchJSONData("apperance", setApperance);
      fetchJSONData("features", setFeatures);
      fetchJSONData("gear", setGear);
      fetchJSONData("stats", setStats);
      fetchJSONData("spells", setSpells);
      fetch(
        `${window.location.protocol}//srogiehacjendy.com/backend/json-data/all-spells.json`
      )
        .then((res) => res.json())
        .then((data) => {
          setSpellData(data);
        });
    } else {
      setApperance({});
      setFeatures({});
      setGear({});
      setStats({});
      setSpells({});
    }
  }, [logged]);

  const saveStateChangeToFile = (state, file) => {
    if (logged) {
      if (JSON.stringify(state).length < 20) return false;
      ajax({
        url: `${window.location.protocol}//${localStorage.getItem("server")}/backend/processing/updateJsonFile.php`,
        method: "post",
        dataType: "json",
        data: {
          field: file,
          value: JSON.stringify(state),
          token: localStorage.getItem("token"),
        },
        success: (res) => {
          //console.log(res);
        },
        error: (res) => {
          console.log(res);
          alert();
        },
      });
    }
  };

  useEffect(() => {
    saveStateChangeToFile(apperance, "apperance");
  }, [apperance]);
  useEffect(() => {
    saveStateChangeToFile(features, "features");
  }, [features]);
  useEffect(() => {
    saveStateChangeToFile(gear, "gear");
  }, [gear]);
  useEffect(() => {
    saveStateChangeToFile(stats, "stats");
  }, [stats]);
  useEffect(() => {
    saveStateChangeToFile(spells, "spells");
  }, [spells]);
  const prepareSpell = (id) => {
    let newPrepared = spells["Prepared"];
    newPrepared.push(id);
    setSpells({ ...spells, ["Prepared"]: newPrepared });
  };
  if (
    !logged ||
    localStorage.getItem("tokenExpires") > dateObj.getTime() + 24 * 60 * 60
  ) {
    return <Login setLogin={setLogged} />;
  }
  if (mode) {
    return (
      <RawEdit
        setMode={setModeFunc}
        apperance={apperance} setApperance = {setApperance}
        features={features} setFeatures = {setFeatures}
        spells={spells} setSpells = {setSpells}
        gear={gear} setGear = {setGear}
        stats={stats} setStats = {setStats}
      />
    );
  }
  return (
    <div>
      <DiceRoller />
      <Router>
        <div className="App" style={ComponentStyle}>
          <Header
            data={stats}
            setData={setStats}
            setLogged={setLogged}
            setMode={setModeFunc}
          />
          <Nav
            view={view}
            setView={setView}
            items={[
              "Stats",
              "Gear",
              "Apperance",
              "Features",
              "Spells",
              "Spell Database",
            ]}
            control={navOpen}
            setControl={setNavOpen}
          />
          <div
            style={{
              ...ContentWrapper,
              left: navOpen ? "0" : "-115px",
            }}
            className="noScroll"
          >
            <Switch>
              <Route
                path="/Stats"
                component={() => {
                  return (
                    <Stats
                      data={stats}
                      setData={setStats}
                      isNavOpen={navOpen}
                      key={'stats'}
                    />
                  );
                }}
              />
              <Route
                path="/Gear"
                component={() => {
                  return (
                    <Gear data={gear} setData={setGear} isNavOpen={navOpen} />
                  );
                }}
              />
              <Route
                path="/Apperance"
                component={() => {
                  return (
                    <Apperance
                      data={apperance}
                      setData={setApperance}
                      isNavOpen={navOpen}
                    />
                  );
                }}
              />
              <Route
                path="/Features"
                component={() => {
                  return (
                    <Features
                      data={features}
                      setData={setFeatures}
                      isNavOpen={navOpen}
                    />
                  );
                }}
              />
              <Route
                path="/Spells"
                component={() => {
                  return (
                    <Spells
                      spellData={spellData}
                      baseStats={stats}
                      data={spells}
                      setData={setSpells}
                      isNavOpen={navOpen}
                    />
                  );
                }}
              />
              <Route
                path="/Spell Database"
                component={() => {
                  return (
                    <Spell_Database
                      data={spellData}
                      prepareSpell={prepareSpell}
                      isNavOpen={navOpen}
                    />
                  );
                }}
              />
              <Route
                path="/"
                component={() => {
                  return (
                    <Stats
                      data={stats}
                      setData={setStats}
                      isNavOpen={navOpen}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
const ContentWrapper = {
  width: "1650px",
  height: "860px",
  float: "left",
  position: "relative",
  transition: "0.3s ease all",
  margin: "0 auto",

  borderRadius: "20px",
  marginTop: "10px",
  fontSize: "50px",
  padding: "20px",
};

const ComponentStyle = {
  position: "relative",
  margin: "0 auto",
  width: "1920px",
  height: "1080px",
};
export default App;

/*
 */
