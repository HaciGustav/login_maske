import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableData } from '../../data';
import SelectTyp from '../SelectTyp';

console.log(tableData[0]);

const DataTable = () => {
    const [typ, setTyp] = useState('');
    const [data] = useState(tableData);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#666' }}>
                        <TableCell
                            align="center"
                            sx={{ p: 0, fontWeight: '600' }}>
                            #
                        </TableCell>
                        <TableCell sx={{ p: 0 }}>
                            <SelectTyp typ={typ} setTyp={setTyp} />
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Mandant
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Kunden-Nummer
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Kunden-Name
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Nummer
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Straße
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Hausnummer
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            PLZ
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: '600' }}>
                            Ort
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter((item) => item.typ === typ || typ === '')
                        .map((row, i) => (
                            <TableRow
                                key={row.nummer}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                    backgroundColor:
                                        row.typ === 'Zähler'
                                            ? '#9ddbf850'
                                            : '#11577750',
                                }}>
                                <TableCell
                                    component="th"
                                    align="center"
                                    scope="row">
                                    {i}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.typ}
                                </TableCell>
                                <TableCell align="right">
                                    {row.mandant}
                                </TableCell>
                                <TableCell align="right">
                                    {row.kNummer}
                                </TableCell>
                                <TableCell align="right">{row.kName}</TableCell>
                                <TableCell align="right">
                                    {row.nummer}
                                </TableCell>
                                <TableCell align="right">
                                    {row.strasse}
                                </TableCell>
                                <TableCell align="right">
                                    {row.hausnummer}
                                </TableCell>
                                <TableCell align="right">{row.plz}</TableCell>
                                <TableCell align="right">{row.ort}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
