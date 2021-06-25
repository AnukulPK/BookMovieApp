import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ReleasedMovies from "./ReleasedMovies";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },

  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085/api/v1/movies")
      .then((response) => setData(response.data.movies));
  }, []);

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={6} cellHeight={250}>
          {data.map((tile) => (
            <GridListTile key={tile.id}>
              <img src={tile.poster_url} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={<IconButton aria-label={`star ${tile.title}`} />}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className="second-section">
        <div className="released-movies">
          <ReleasedMovies movieData={data} />
        </div>
        <div className="filter-form"></div>
      </div>
    </Fragment>
  );
};

export default Home;
