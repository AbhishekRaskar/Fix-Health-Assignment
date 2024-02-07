import React from "react";
import Slider from "react-slick";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Review {
  name: string;
  occupation: string;
  problem: string;
  review: string;
  rating: string;
  sessions: string;
  image: string;
}

interface ReviewSlideProps {
  review: Review;
}

const ReviewSlide: React.FC<ReviewSlideProps> = ({ review }) => (
  <Box
    bg={"gray.800"}
    h={"90%"}
    w="100%"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    boxShadow="md"
  >
    <Heading fontSize="xl" mb={2}>
      {review.problem}
    </Heading>
    <Image src={review.image} alt={review.name} mb={4} borderRadius="md" />
    <Text fontSize="md" color={"tomato"} mb={2}>
      {review.review}
    </Text>
    <Text color={"black"} fontWeight={"bold"} fontSize="lg" mb={1}>
      {review.name}
    </Text>
    <Text fontSize="sm" mb={2}>
      {review.occupation}
    </Text>
    <Text color={"#FFFF66"}>{review.rating}</Text>
  </Box>
);

const SliderComponent = () => {
  const settings = {
    dots: true,
    // arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <Box mb={4} mt={10}>
        <br />
        <br />
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        bg="white"
        w="12px"
        h="12px"
        borderRadius="50%"
        display="inline-block"
        mx="3px"
      ></Box>
    ),
  };

  const reviews = [
    {
      name: "Rajesh Kumar",
      occupation: "Business Owner",
      problem: "Persistent headaches",
      review:
        "Their treatment method was incredible, my persistent headaches vanished.",
      rating: "9.5/10",
      sessions: "34",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Emily Johnson",
      occupation: "Teacher",
      problem: "Anxiety and stress",
      review:
        "Their therapy sessions helped me manage my anxiety and stress effectively. I feel much more relaxed and in control now.",
      rating: "9/10",
      sessions: "20",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Michael Smith",
      occupation: "Software Engineer",
      problem: "Insomnia",
      review:
        "Their sleep therapy program worked wonders for my insomnia. I'm finally getting restful nights of sleep!",
      rating: "9.8/10",
      sessions: "12",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Aarti Sharma",
      occupation: "HR Professional",
      problem: "Chronic neck pain",
      review:
        "I was skeptical at first, but their holistic approach truly helped alleviate my chronic neck pain.",
      rating: "9.3/10",
      sessions: "67",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Aniket Gupta",
      occupation: "Experience Designer, Google",
      problem: "Posture issues",
      review:
        "They provided personalized care that greatly improved my posture and reduced my back pain significantly.",
      rating: "9.7/10",
      sessions: "56",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Vandana Reddy",
      occupation: "General Physician",
      problem: "Knee pain",
      review:
        "I had been suffering from knee pain for years, but their expertise helped me get back on my feet.",
      rating: "9.4/10",
      sessions: "80",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Rahul Singh",
      occupation: "Software Engineer",
      problem: "Shoulder injury",
      review:
        "After a shoulder injury, I thought I'd never regain mobility. Thanks to them, I'm pain-free and fully functional.",
      rating: "9.8/10",
      sessions: "28",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Pooja Patel",
      occupation: "Teacher",
      problem: "Lower back pain",
      review:
        "Teaching for hours caused severe lower back pain. Their treatment plan gave me relief and improved my quality of life.",
      rating: "9.6/10",
      sessions: "55",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Kunal Shah",
      occupation: "Marketing Manager",
      problem: "Ankle sprain",
      review:
        "An ankle sprain was affecting my daily activities. Thanks to them, I recovered quickly and efficiently.",
      rating: "9.7/10",
      sessions: "45",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Alisha Banerjee",
      occupation: "Graphic Designer",
      problem: "Wrist pain",
      review:
        "Constant mouse usage led to wrist pain. Their treatment not only relieved the pain but also provided preventive measures.",
      rating: "9.5/10",
      sessions: "76",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Ravi Menon",
      occupation: "Consultant",
      problem: "Hip discomfort",
      review:
        "Hip discomfort was hindering my mobility. Their tailored approach resolved the issue effectively, improving my lifestyle.",
      rating: "9.6/10",
      sessions: "80",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
    {
      name: "Neha Desai",
      occupation: "Dentist",
      problem: "Neck stiffness",
      review:
        "Hours of bending over patients caused severe neck stiffness. Their treatment plan alleviated the discomfort remarkably.",
      rating: "9.7/10",
      sessions: "50",
      image:
        "https://img.freepik.com/free-photo/happy-surgeon-senior-woman-handshaking-while-greeting-lobby-clinic-focus-is-woman_637285-644.jpg",
    },
  ];

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <ReviewSlide key={index} review={review} />
      ))}
      <br />
      <br />
    </Slider>
  );
};

export default SliderComponent;
