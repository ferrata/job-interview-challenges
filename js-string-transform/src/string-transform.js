function stringTransform(str) {
  const rowLabels = [];
  const columnLabels = [];
  const data = []; // [column][{rowLabel: value}]

  const rowsAndColumns = str.split(";");
  rowsAndColumns.forEach((rowAndColumnData) => {
    if (rowAndColumnData === "") {
      return;
    }

    const rowData = rowAndColumnData.split(":");
    const rowPairs = rowData[0];
    const rowValues = rowPairs.split(",");

    const column = [];
    let lastRowLabel = null;
    rowValues.forEach((value, index) => {
      const isLabel = index % 2 === 0;

      if (isLabel) {
        if (rowLabels.indexOf(value) === -1) {
          rowLabels.push(value);
        }

        lastRowLabel = value;
      } else {
        column[lastRowLabel] = value;
      }
    });

    const columnLabel = rowData[1];
    columnLabels.push(columnLabel);

    data.push(column);
  });

  const result = [];
  result.push(["", ...columnLabels]);

  rowLabels.forEach((rowLabel) => {
    const resultRow = [rowLabel];

    columnLabels.forEach((_, columnIndex) => {
      const cellData = data[columnIndex][rowLabel] ?? "";
      resultRow.push(cellData);
    });

    result.push(resultRow);
  });

  return result;
}

module.exports = {
  stringTransform,
};
