import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import MyPlan from "./MyPlan";
import PlanDetails from "./PlanDetails";
import PreventiveExams from "./PreventiveExams";
import MakeClaim from "./MakeClaim";
import ChangeLanguage from "./ChangeLanguage";
import Provider from "./Provider";
import Reimbursements from "./Reimbursements";
import ViewDetails from "./ViewDetails";
import practitionersData from "../utlis/practitionersData";
import SearchResults from "./SearchResults";
import MyProfile from "./MyProfile";
import ChangePassword from "./ChangePassword";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("My Plan");
  const [displayedComponent, setDisplayedComponent] = useState("MyPlan");
  const [appBarTitle, setAppBarTitle] = useState("My Plan");
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const [historyStack, setHistoryStack] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previousComponent, setPreviousComponent] = useState("MyPlan");

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    // Assuming data is an array of objects with a 'name' property to search against
    const updatedResults = practitionersData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(updatedResults);
  };

  const toggleComponent = (component, title, practitioner) => {
    setSelectedPractitioner(practitioner);
    if (
      component === "PlanDetails" ||
      component === "MakeClaim" ||
      component === "ViewDetails" ||
      component === "ChangePassword"
    ) {
      setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
    } else {
      // Only update history stack if navigating forward
      if (
        historyStack.length > 0 &&
        historyStack[historyStack.length - 1][0] !== selectedCategory
      ) {
        setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
      }
    }
    setDisplayedComponent(component);
    if (component !== "SearchResults") {
      setPreviousComponent(component);
    }
    console.log(previousComponent);
    setAppBarTitle(title);
  };

  const componentMap = {
    MyPlan: (
      <MyPlan
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    PlanDetails: (
      <PlanDetails
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    PreventiveExams: (
      <PreventiveExams
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    MakeClaim: (
      <MakeClaim
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ChangeLanguage: (
      <ChangeLanguage
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    Provider: (
      <Provider
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),

    Reimbursements: (
      <Reimbursements
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ViewDetails: (
      <ViewDetails
        practitioner={selectedPractitioner}
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    SearchResults: (
      <SearchResults
        practitioners={searchResults}
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        previousComponent={previousComponent}
      />
    ),
    MyProfile: (
      <MyProfile
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ChangePassword: (
      <ChangePassword
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    // Add other components as needed
  };

  return (
    <Sidebar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      appBarTitle={appBarTitle}
      setAppBarTitle={setAppBarTitle}
      displayedComponent={displayedComponent} // Pass displayedComponent as prop
      toggleComponent={toggleComponent}
      historyStack={historyStack}
      setHistoryStack={setHistoryStack}
      setDisplayedComponent={setDisplayedComponent} // Pass setDisplayedComponent
      onSearch={handleSearch}
    >
      <Box width="100%">{componentMap[displayedComponent]}</Box>
    </Sidebar>
  );
};

export default Home;
