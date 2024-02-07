import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Badge,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

interface Doctor {
  _id: string;
  name: string;
  expertise: string;
  city: string;
  education: string;
  BPT_experience: string;
  specialties: string[];
  ongoing: boolean;
  timings: string;
  patients_treated: number;
  image: string;
}

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fixhealth-assignment-be.onrender.com/doctor/"
        );
        console.log(response.data);
        setDoctors(response.data.doctors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let displayedDoctors = showAll ? doctors : doctors.slice(0, 4);

  if (selectedCity) {
    displayedDoctors = displayedDoctors.filter(
      (doctor) => doctor.city === selectedCity
    );
  }

  const cities = Array.from(new Set(doctors.map((doctor) => doctor.city)));

  return (
    <Flex direction="column" align="center" mt={8}>
      <Heading as="h1" mb={4}>
        Meet Our Doctors
      </Heading>
      <Text fontSize={"20px"}>
        Experience the Benefits of Advanced Technology and Expert Care
      </Text>
      <br />
      {showAll && (
        <Select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          mt={4}
          w="200px"
          mb={4}
        >
          <option value="">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </Select>
      )}
      <Flex flexWrap="wrap" justifyContent="center">
        {displayedDoctors.map((doctor) => (
          <Box
            key={doctor._id}
            bg={"gray.800"}
            p={4}
            m={2}
            borderRadius="lg"
            boxShadow="md"
            maxW="300px"
            w="100%"
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              mb={4}
              borderRadius="md"
            />
            <Heading as="h3" size="md" mb={2}>
              {doctor.name}
            </Heading>
            <Text fontSize="sm" color="#4D94FF" mb={2}>
              {doctor.expertise}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {doctor.city}
            </Text>
            <Text fontSize="md" color="tomato" mb={2}>
              {doctor.education}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
              BPT Experience:{" "}
              <Box as="span" color="white" fontWeight="bold">
                {doctor.BPT_experience}
              </Box>
            </Text>

            <Text fontSize="sm" color="gray.500" mb={2}>
              Specialties:
              {doctor.specialties.map((specialty, index) => (
                <Badge key={index} ml={1} variant="outline" colorScheme="teal">
                  {specialty}
                </Badge>
              ))}
            </Text>
            <Text fontSize="sm" mb={2} color={doctor.ongoing ? "green" : "red"}>
              {doctor.ongoing ? "Currently available" : "Not available"}
            </Text>
            <Text fontSize="sm" color="#FFFF66" mb={2}>
              Timings: {doctor.timings}
            </Text>
            <Text fontSize="sm" as={"b"} color="gray.500" mb={2}>
              Patients Treated: {doctor.patients_treated}
            </Text>
          </Box>
        ))}
      </Flex>
      {!showAll ? (
        <Button onClick={() => setShowAll(true)} mt={4}>
          Show All
        </Button>
      ) : (
        <Button onClick={() => setShowAll(false)} mt={4}>
          Show Less
        </Button>
      )}
    </Flex>
  );
};

export default Doctors;
