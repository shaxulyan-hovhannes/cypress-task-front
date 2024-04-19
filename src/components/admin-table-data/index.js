import React from "react";
import PropTypes from "prop-types";

import MuiTable from "components/ui/table";

const AdminTableData = ({
  title = "",
  tableHeadCells = {},
  tableBodyCells = [],
}) => {
  return (
    <div>
      <div className="admin-home-table-title">{title}</div>
      <div>
        <MuiTable headCells={tableHeadCells} bodyCells={tableBodyCells} />
      </div>
    </div>
  );
};

AdminTableData.propTypes = {
  title: PropTypes.string,
  tableHeadCells: PropTypes.object,
  tableBodyCells: PropTypes.array,
};

export default AdminTableData;
