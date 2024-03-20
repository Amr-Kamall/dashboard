import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

function Faq() {
  return (
    <Box sx={{ display: "flex", gap: "15px", flexDirection: "column" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>General settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Featured in the folk music of many countries, the accordion is a
            hand-held instrument that first became popular in early 19th-century
            Austria and
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Germany. The accordion is classified as a free-reed wind instrument,
            and as such, it produces sound when air from the bellows flows over
            the reeds
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Advanced settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            contained within the casing. Modern accordions often have a range of
            seven or eight octaves.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            plastic casings containing rows of metal reeds. Each casing has a
            set of finger buttons or pianolike keys on the end. As the bellows
            is moved, air
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            intake and outflow pass over the reeds to create the various pitches
            of sound. Individual notes and
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>More information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The name accordion, from the German Akkord (referring to a musical
            chord), appeared for the first time in an 1829 patent by Cyril
            Demian of Vienna. The design of Demian’s accordion included
            ready-made chords, which
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Speaking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            distinguished it from the already existing instrument known as the
            concertina. From this beginning, the accordion continued to evolve.
            Some accordions, including the earliest ones, rely on a
            “single-action” system.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Working</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            One of the simplest forms of this instrument has one row of melody
            buttons for the musical scale of C on the right side and two keys on
            the left
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
