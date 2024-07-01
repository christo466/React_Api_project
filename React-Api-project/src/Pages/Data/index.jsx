import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPeopleData } from "../../store/people.js";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "./Dashboard.css"; 

const Dashboard = () => {
  const dispatch = useDispatch();

  const peopleData = useSelector((state) => state.people.data);
  const isLoading = useSelector((state) => state.people.status);

  // State to keep track of displayed rows and index for next row
  const [displayedData, setDisplayedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data when component mounts
    dispatch(getPeopleData());
  }, [dispatch]);

  useEffect(() => {
    // Initialize displayedData with the first three entries, if available
    if (peopleData.length > 0) {
      const initialData = peopleData.slice(0, 3);
      setDisplayedData(initialData);
      setCurrentIndex(3); // Start after the initial three entries
    }
  }, [peopleData]); // Runs when peopleData changes

  const addNextData = () => {
    // Add the next item from peopleData to displayedData
    if (currentIndex < peopleData.length) {
      setDisplayedData((prevData) => [...prevData, peopleData[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="dashboard-container">
      {isLoading === "pending" ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="dashboard-title">PEOPLE DATA</h1>
          <TableContainer component={Paper} className="table-container">
            <Table aria-label="people table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedData.map((person) => (
                  <TableRow key={person.id} className="table-row">
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.username}</TableCell>
                    <TableCell>{person.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="secondary"
            onClick={addNextData}
            style={{ marginTop: "1rem" }}
            disabled={currentIndex >= peopleData.length}
          >
            Load Next
          </Button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
