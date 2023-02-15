import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px',
};

const SearchModal = ({ setOpenModal, openModal, setSearchVal, searchVal }) => {
    const handleClose = () => setOpenModal(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box component="form" onSubmit={handleSubmit} sx={style}>
                    <TextField
                        variant="outlined"
                        label="Suche Mandant"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                    <Button variant="contained" type="submit">
                        Suchen
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default SearchModal;
