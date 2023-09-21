import Grid from '../Components/Grid';

export const gridMaker = (
  rectangleHeight,
  rectangleWidth,
  gridHeight,
  gridWidth,
  gridColor,
) => {
  if (rectangleHeight % gridHeight == 0 && rectangleWidth % gridWidth == 0) {
    //check wheather the given size fill the parent rectangle equally or not
    var gridBox = [];
    let rowNumber = rectangleHeight / gridHeight; //total number of row in main rectangle
    let columnNumber = rectangleWidth / gridWidth; //total number of column in main rectangle
    let numberofGrids = rowNumber * columnNumber; //total number of grids(metrics rule)
    for (let i = 0; i < numberofGrids; i++) {
      gridBox.push(
        <Grid
          key={i}
          height={gridHeight}
          width={gridWidth}
          color={gridColor}
        />,
      ); //get all the grids in an array
    }
    return gridBox;
  } else {
    alert('Sorry! Given Size can not fill the parent rectangle fully');
    //return null;
  }
};
