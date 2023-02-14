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
    const [data, setData] = useState(tableData);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: '90%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
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
                        .map((row) => (
                            <TableRow
                                key={row.nummer}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}>
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
