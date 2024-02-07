import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Image,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  Avatar,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Home = () => {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBookNowClick = () => {
    // Check if inputs are not empty
    // console.log(formData);
    if (formData.name.trim() === "" || formData.phoneNumber.trim() === "") {
      // If inputs are empty, do not proceed
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      return;
    }
    setIsModalOpen(true);
    // Make POST request
    fetch("https://fixhealth-assignment-be.onrender.com/contact/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Reset form data
          setFormData({
            name: "",
            phoneNumber: "",
            age: "",
            city: "",
            company: "",
          });
          // Close modal
          setIsModalOpen(false);
          // Show success message
          toast({
            title: "Success",
            description: "Appointment booked successfully!",
            status: "success",
            duration: 5000,
            position: "top",
            isClosable: true,
          });
        } else {
          throw new Error("Failed to book appointment");
        }
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
        toast({
          title: "Error",
          description: "Failed to book appointment. Please try again later.",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Box position="relative">
        <Image w={"100%"} src={"https://wallpapercave.com/wp/wp2968524.jpg"} />
        <Box
          borderRadius={"10px"}
          bg="#2C3E50"
          textColor={"black"}
          w={{ base: "100%", lg: "20%", md: "100%" }}
          position={{ base: "static", lg: "absolute" }}
          top={{ base: "auto", md: "50%" }}
          left={{ base: "auto", lg: "70%" }}
          transform={{ base: "none", lg: "translate(-50%, -50%)" }}
          p={4}
        >
          <Heading>
            Book Appointment for{" "}
            <Text color={"red"} as={"s"}>
              Rs 1000
            </Text>{" "}
            FREE
          </Heading>
          <Text color={"white"}>60+ Expert Physiotherapists</Text>
          <br />
          <InputGroup>
            <Avatar h={"30px"} w={"30px"} ml={1} mr={2} />
            <Input
              name="name"
              variant="flushed"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement children={<PhoneIcon color="gray.300" />} />
            <Input
              name="phoneNumber"
              type="tel"
              variant="flushed"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </InputGroup>
          <br />
          <Button
            bg={"#2C3E50"}
            _hover={{ bg: "#2C3E50", color: "black" }}
            color={"white"}
            onClick={handleBookNowClick}
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <label>Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Phone Number</label>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <label>Age</label>
              <Input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
              />
              <label>City</label>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
              <label>Company</label>
              <Input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleBookNowClick}>
              Submit
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
