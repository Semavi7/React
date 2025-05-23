import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Acordion() {
    const [expanded, setExpended] = useState(false)

    const handleChange = (panel) => (event, expanded) => {
        setExpended(expanded ? panel : false)
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography component="span">Bölüm 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur iste obcaecati ipsum dolores reprehenderit! Optio cumque eaque aperiam rerum quisquam provident, porro necessitatibus, quis unde deleniti officiis deserunt iste.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography component="span">Bölüm 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur iste obcaecati ipsum dolores reprehenderit! Optio cumque eaque aperiam rerum quisquam provident, porro necessitatibus, quis unde deleniti officiis deserunt iste.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography component="span">Bölüm 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur iste obcaecati ipsum dolores reprehenderit! Optio cumque eaque aperiam rerum quisquam provident, porro necessitatibus, quis unde deleniti officiis deserunt iste.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default Acordion