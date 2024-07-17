import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

const currentDate = "2024-07-18";
const initialData = [
  {
    startDate: "2024-07-18T09:45",
    endDate: "2024-07-18T11:00",
    title: "Meeting",
  },
  {
    startDate: "2024-07-19T12:00",
    endDate: "2024-07-19T13:30",
    title: "Go to a gym",
  },
];

const ScheduleCalender = () => {
  const [data, setData] = useState(initialData);
  const [currentDateState, setCurrentDateState] = useState(currentDate);
  const [currentViewName, setCurrentViewName] = useState("Day");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAppointment = () => {
    setData([...data, newAppointment]);
    handleCloseModal();
  };

  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState
          currentDate={currentDateState}
          onCurrentDateChange={setCurrentDateState}
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
        />
        <DayView startDayHour={9} endDayHour={14} />
        <WeekView startDayHour={9} endDayHour={14} />
        <MonthView />
        <Appointments />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <AppointmentTooltip showOpenButton showCloseButton />
        <AppointmentForm />
      </Scheduler>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Create New Schedule</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            value={newAppointment.title}
            onChange={(e) =>
              setNewAppointment({ ...newAppointment, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="datetime-local"
            fullWidth
            value={newAppointment.startDate}
            onChange={(e) =>
              setNewAppointment({ ...newAppointment, startDate: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="End Date"
            type="datetime-local"
            fullWidth
            value={newAppointment.endDate}
            onChange={(e) =>
              setNewAppointment({ ...newAppointment, endDate: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveAppointment} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ScheduleCalender;
