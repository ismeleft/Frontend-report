import {Stack,Button} from '@mui/material';

export default function Nav() {
    return (
        <Stack direction="row" justifyContent={"space-between"} px={2} py={2}>
            <Button size='large'><a href="/"><h2>WEN-YING</h2></a></Button>
            <Stack direction="row" spacing={1} px={5} alignItems={"center"}>
            <Button ><a href="/education"><h3>Education</h3></a></Button>
            <Button><a href="/experience"><h3>Experience</h3></a></Button>
            <Button><a href="/habit"><h3>Habit</h3></a></Button>
            <Button><a href="/target"><h3>Target</h3></a></Button>
            </Stack>
        </Stack>
    );
}