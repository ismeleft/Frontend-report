// import React from 'react';
import { Stack ,Button} from '@mui/material';

export default function Nav() {
    return (
        <Stack direction="row" justifyContent={"space-between"} px={2}>
            <Button>WEN-YING</Button>
            <Stack direction="row" spacing={1} px={5} alignItems={"center"}>
            <Button>Education</Button>
            <Button>Experience</Button>
            <Button>Habit</Button>
            </Stack>
        </Stack>
    );
}