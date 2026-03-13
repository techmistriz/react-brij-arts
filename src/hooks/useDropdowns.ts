import { useEffect, useState } from "react";
import {
  getCountries,
  getJobLevels,
  getIndustries,
  getCohorts,
  getFelloship,
  getInstitution,
} from "@/lib/api/commonDropdown";

export const useDropdowns = () => {
  const [countries, setCountries] = useState([]);
  const [joblevels, setJoblevels] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [fellowship, setFellowship] = useState([]);
  const [institution, setInstitution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        countriesData,
        jobLevelsData,
        industriesData,
        cohortsData,
        fellowshipData,
        institutionData
      ] = await Promise.all([
        getCountries(),
        getJobLevels(),
        getIndustries(),
        getCohorts(),
        getFelloship(),
        getInstitution()
      ]);

      setCountries(countriesData);
      setJoblevels(jobLevelsData.data);
      setIndustries(industriesData.data);
      setCohorts(cohortsData.data);
      setFellowship(fellowshipData.data);
            setInstitution(institutionData.data);

    };

    fetchData();
  }, []);

  return {
    countries,
    joblevels,
    industries,
    cohorts,
    fellowship,
    institution
  };
};