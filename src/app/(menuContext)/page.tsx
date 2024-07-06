"use client"
import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { useThemeContext } from "../../components/ThemeContext";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react"
import { useState } from "react";

export default function Home() {
  const appTheme = useThemeContext();
  const [calendar, setCalendar] = useState<DayPilot.Calendar>();

  const initialConfig: DayPilot.CalendarConfig = {
    viewType: "Day",
    startDate: DayPilot.Date.now(), 
    locale: "pt-br",
    headerHeight: 50,
  };

  const colors = [
    {name: "Green", id: "#6aa84f"},
    {name: "Blue", id: "#3d85c6"},
    {name: "Turquoise", id: "#00aba9"},
    {name: "Light Blue", id: "#56c5ff"},
    {name: "Yellow", id: "#f1c232"},
    {name: "Orange", id: "#e69138"},
    {name: "Red", id: "#cc4125"},
    {name: "Light Red", id: "#ff0000"},
    {name: "Purple", id: "#af8ee5"},
  ];

  const participants = [
    {name: "1", id: 1},
    {name: "2", id: 2},
    {name: "3", id: 3},
    {name: "4", id: 4},
  ];

  const editEvent = async (e: DayPilot.Event) => {
    const form = [
        {name: "Event text", id: "text", type: "text"},
        {name: "Event color", id: "backColor", type: "select", options: colors},
        {name: "Number of participants", id: "tags.participants", type: "select", options: participants},
    ];

    const modal = await DayPilot.Modal.form(form, e.data);
    if (modal.canceled) { return; }
    e.data.text = modal.result.text;
    e.data.backColor = modal.result.backColor;
    e.data.tags.participants = modal.result.tags.participants;
    calendar?.events.update(e);
  };

  const onTimeRangeSelected = async (args: DayPilot.CalendarTimeRangeSelectedArgs) => {
    const modal = await DayPilot.Modal.prompt("Create a new event:", "Event Name", {okText: "Add Registry"});
    calendar?.clearSelection();
    if (modal.canceled) {
        return;
    }

    calendar?.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
        tags: {
            participants: 1,
        }
    });
  };

  const contextMenu = new DayPilot.Menu({
    items: [
        {
            text: "Delete",
            onClick: async args => {
                calendar?.events.remove(args.source);
            },
        },
        {
            text: "-"
        },
        {
            text: "Edit...",
            onClick: async args => {
                await editEvent(args.source);
            }
        }
    ]
});

  const [config, setConfig] = useState(initialConfig);

  return (
    <Grid  
      container
      justifyContent="center"
      alignItems="center"
      sx={{
          flexGrow: 1,
          padding: 2,
          width: "100vw",
      }}
    >
        <Paper
          variant="outlined"
          sx={{
              display: "flex",
              minHeight: "calc(100vh - 160px)",
              maxHeight: "calc(100vh - 160px)",
              borderColor: "white"
          }}
        >
          <Box
            width={"35%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 2,
              borderRadius: "4px",
              backgroundColor: "rgba(0,126,200, 1)",
            }}
          >
            <Typography variant="h3" style={{marginBottom: "2%", marginTop: "2%"}}>Diary</Typography>
            <Grid
              container
              sx={{
                overflow: "auto",
              }}
            >
              <DayPilotCalendar
                {...config}
                cellHeight={35}
                contextMenu={contextMenu}
                onTimeRangeSelected={(onTimeSelected) => onTimeRangeSelected(onTimeSelected)}
                onEventClick={() => alert("Data")}
                heightSpec="Full"
              />
            </Grid>
          </Box>
          <Divider 
            flexItem
            variant="middle"
            orientation="vertical"
          />
        </Paper>
    </Grid>
  );
}
