import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

const headCells = [
  { id: 'hero_name', label: 'Superhero name', isSortable: true },
  { id: 'firstname', label: 'Real first name', isSortable: true },
  { id: 'lastname', label: 'Real last name', isSortable: true },
  { id: 'active', label: 'Active ?', isSortable: true },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={`${headCell.id}-${index}`}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
                headCell.label
              )}

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const SmartTable = props => {
  const { superHeros, superHeroMeta, handleSorting, handlePageNumberClick } = props;
  const classes = useStyles();
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('created_at');

  const handleSortRequest = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    handleSorting(property, isAsc ? 'desc' : 'asc');
  };

  const pageCount = Math.ceil(superHeroMeta.total_count / superHeroMeta.per);

  const handlePageClick = data => {
    let selected = data.selected;
    console.log(selected);
    handlePageNumberClick(selected + 1);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table>
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleSortRequest}
            />
            <TableBody>
              {superHeros.map(superHero => {
                return (
                  <TableRow
                    hover
                    key={superHero.id}
                  >
                    <TableCell>{superHero.hero_name}</TableCell>
                    <TableCell>{superHero.firstname}</TableCell>
                    <TableCell>{superHero.lastname}</TableCell>
                    <TableCell>
                      {superHero.active ? (
                          <span>Active</span>
                        ): (
                          <span>Inactive</span>
                        )
                      }
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        <span className='paginationTotalCount'>Total {superHeroMeta.total_count}</span>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  }
}));

export default SmartTable;