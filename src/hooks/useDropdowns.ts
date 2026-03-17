import { useEffect, useState } from "react";
import {
  getCountries,
  getInstitution_type,
} from "@/lib/api/commonDropdown";

export const useDropdowns = () => {
  const [countries, setCountries] = useState([]);

  const [institutionType, setInstitutionType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [countriesData, institutionData] = await Promise.all([
        getCountries(),

        getInstitution_type(),
      ]);

      setCountries(countriesData);
      setInstitutionType(institutionData.data);
    };

    fetchData();
  }, []);

  return {
    countries,
    institutionType,
  };
};
